import { cn } from "~/lib/utils";
import { Badge } from "./ui/badge";

export default function StatusBadge({
  status,
}: {
  status: "offsale" | "onsale";
}) {
  return (
    <Badge
      className={cn(
        status === "offsale"
          ? "bg-red-400 hover:bg-red-400/80"
          : "bg-primary hover:bg-primary/80",
        "cursor-auto shadow-md",
      )}
    >
      {status}
    </Badge>
  );
}
