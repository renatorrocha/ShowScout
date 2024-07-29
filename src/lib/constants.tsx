import { Ticket } from "lucide-react";
import { RiSpotifyFill } from "react-icons/ri";

export const NavbarLinks = [
  {
    label: "Next Shows",
    href: "/dashboard/your-shows",
    icon: (
      <Ticket className="size-5 flex-shrink-0 text-secondary dark:text-primary-dark" />
    ),
  },
];

export const SpotifyLink = {
  label: "Spotify",
  href: "https://open.spotify.com/",
  icon: <RiSpotifyFill className="size-8 text-white" />,
};
