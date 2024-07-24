"use server";

import axios from "axios";

export type DataRes<T> = {
  success: boolean;
  data: T[];
};

export const getFollowedArtists = async (accessToken: string) => {
  const res = await axios.get(`https://api.spotify.com/v1/me/following`, {
    params: {
      type: "artist",
      limit: 5,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = (await res.data) as DataRes<string>;
  return data;
};
