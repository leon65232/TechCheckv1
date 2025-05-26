import {
    ChevronDownIcon,
    ChevronUpIcon,
} from "@heroicons/react/24/outline";

export const buttons = [
    { label: "left", keyCode: "left" },
    { label: "middle", keyCode: "middle" },
    { label: "right", keyCode: "right" },
  { label: <ChevronUpIcon className="h-4 w-4" />, keyCode: "scrollup" },
  { label: <ChevronDownIcon className="h-4 w-4" />, keyCode: "scrolldown" },
]