import { ClipboardIcon } from "lucide-react";

import type { Script } from "@/lib/types";

import { buttonVariants } from "@/components/ui/button";
import handleCopy from "@/components/handle-copy";
import { cn } from "@/lib/utils";

export default function InterFaces({ item }: { item: Script }) {
  return (
    <div className="flex flex-col gap-2 w-full">
      {item.interface_port !== null
        ? (
            <div className="flex items-center justify-end">
              <h2 className="mr-2 text-end text-lg font-semibold">Default Interface:</h2>
              <span className={cn(buttonVariants({ size: "sm", variant: "outline" }), "flex items-center gap-2")}>
                {item.interface_port}
                <ClipboardIcon onClick={() => handleCopy("default interface", String(item.interface_port))} className="size-4 cursor-pointer" />
              </span>
            </div>
          )
        : null}
    </div>
  );
}
