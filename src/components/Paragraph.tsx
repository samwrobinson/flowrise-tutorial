import clsx from "clsx";
import React from "react";

type ParagraphProps = {
    as?: "p"; // This could be expanded to include other types if needed (e.g., "span", "div", etc.)
    size?: "sm" | "md" | "lg" | "xl" | "2xl"; // Adding more size options
    children: React.ReactNode;
    className?: string;
}

export default function Paragraph({
    as: Comp = "p",
    className,
    children,
    size = "2xl"
}: ParagraphProps){

    return (
        <Comp className={clsx("font-bold leading-tight tracking-tight font-display text-teal-50",
            size === "sm" && "text-sm",
            size === "md" && "text-md",
            size === "lg" && "text-lg",
            size === "xl" && "text-xl",
            size === "2xl" && "text-2xl",
            className
        )}>
            {children}
        </Comp>
    );
}