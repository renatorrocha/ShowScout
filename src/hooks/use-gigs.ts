import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { env } from "~/env";

const fetchGigs = async (artistName: string) => {
  try {
    const response = await axios.get<GigResponse>(
      "https://app.ticketmaster.com/discovery/v2/events.json",
      {
        params: {
          keyword: artistName,
          apikey: env.NEXT_PUBLIC_TICKETMASTER_API_KEY,
        },
      },
    );

    if (response.data._embedded === undefined) return [];

    console.log(response.data._embedded.events);

    return response.data._embedded.events;
  } catch (error: unknown) {
    console.error(`Error fetching Events:`, error);
  }
};

export const useGigs = (artistName: string) => {
  return useQuery({
    queryKey: ["events", artistName],
    queryFn: () => fetchGigs(artistName),
    enabled: !!artistName,
  });
};
