import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchFollowedArtists = async (accessToken: string) => {
  try {
    const response = await axios.get<ArtistsResponse>(
      `https://api.spotify.com/v1/me/following`,
      {
        params: {
          type: "artist",
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );

    return response.data.artists.items;
  } catch (error: unknown) {
    console.error("Error fetching followed artists:", error);
    return [];
  }
};

export const useFollowedArtists = (accessToken: string) => {
  return useQuery({
    queryKey: ["artists", accessToken],
    queryFn: () => fetchFollowedArtists(accessToken),
    enabled: !!accessToken,
  });
};
