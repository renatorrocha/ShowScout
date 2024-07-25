declare type Artists = {
  id: string;
  name: string;
  popularity: number;
  uri: string;
  genres: string[];
  href: string;
  images: [{ url: string; height: number; width: number }];

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
    items: Artists[];
    href: string;
    limit: number;
    total: number;
    next: string | null;
  };
};
