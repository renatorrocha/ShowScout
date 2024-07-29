import SpotifyProvider from "next-auth/providers/spotify";
import {
  getServerSession,
  type Session,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { env } from "~/env";
import type { JWT } from "next-auth/jwt";

export type SessionWithAccessToken = Session & { accessToken: string };

export type JWTWithAccessToken = JWT & {
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
};

const scopes = ["user-follow-read"].join(",");

const params = {
  scope: scopes,
};

const LOGIN_URL =
  "https://accounts.spotify.com/authorize?" +
  new URLSearchParams(params).toString();

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
    accessToken: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: env.SPOTIFY_CLIENT_ID,
      clientSecret: env.SPOTIFY_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.accessTokenExpires = account.expires_at;
        return token;
      }
      // access token has not expired
      if (
        token.accessTokenExpires &&
        Date.now() < (token.accessTokenExpires as number) * 1000
      ) {
        return token;
      }

      // access token has expired
      return await refreshAccessToken(token as JWTWithAccessToken);
    },
    session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      (session as SessionWithAccessToken).accessToken = (
        token as JWTWithAccessToken
      ).accessToken;

      return session;
    },
  },
  secret: env.NEXTAUTH_SECRET,
};

async function refreshAccessToken(
  token: JWTWithAccessToken,
): Promise<JWTWithAccessToken> {
  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", token.refreshToken);
  const buffer = Buffer.from(
    env.SPOTIFY_CLIENT_ID + ":" + env.SPOTIFY_CLIENT_SECRET,
  ).toString("base64");
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: "Basic " + buffer,
    },
    body: params,
  });
  const data = (await response.json()) as {
    access_token: string;
    refresh_token: string;
    expires_in: number;
  };
  return {
    ...token,
    accessToken: data.access_token,
    refreshToken: data.refresh_token ?? token.refreshToken,
    accessTokenExpires: Date.now() + data.expires_in * 1000,
  };
}

export const getServerAuthSession = () => getServerSession(authOptions);
