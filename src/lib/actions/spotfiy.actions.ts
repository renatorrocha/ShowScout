"use server";

import axios from "axios";

// type DataRes<T> = {
//   artists: {
//     items: T[];
//   };
// };

export const getFollowedArtists = async (accessToken: string) => {
  const res = await axios.get(`https://api.spotify.com/v1/me/following`, {
    params: {
      type: "artist",
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = (await res.data) as ArtistsResponse;
  return data;
};
