declare type Artist = {
  id: string;
  name: string;
  popularity: number;
  uri: string;
  genres: string[];
  href: string;
  images: { url: string; height: number; width: number }[];
  followers: {
    href: string;
    total: number;
  };
  external_urls: {
    spotify: string;
  };
};

declare type ArtistsResponse = {
  artists: {
    items: Artist[];
  };
};
