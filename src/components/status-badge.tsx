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
        status === "offsale" ? "bg-red-400" : "bg-primary",
        "shadow-md",
      )}
    >
      {status}
    </Badge>
  );
}
