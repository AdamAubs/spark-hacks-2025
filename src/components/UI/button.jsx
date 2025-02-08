import * as React from "react";
import {Slot} from "@radix-ui/react-slot";
import clsx from "clsx";

export default function Button({asChild, variant = "solid", className, children, ...props}) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        "px-4 py-2 rounded-md transition focus:ring-2 focus:ring-offset-2",
        {
          "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500": variant === "solid",
          "border border-blue-600 text-blue-600 hover:bg-blue-100 focus:ring-blue-500": variant === "outline",
          "text-black font-bold hover:bg-blue-100 focus:ring-blue-500": variant === "ghost"
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
