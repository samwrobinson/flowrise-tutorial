import clsx from "clsx";
import React from "react";

type ParagraphProps = {
    as?: "p";
    size?: "2xl"
    children: React.ReactNode;
    className?: string;
}


export default function Paragraph({
    as: Comp = "p",
    className,
    children,
    size = "2xl"
}: ParagraphProps){

return(
    <Comp className={clsx("font-bold leading-tight tracking-tight font-display text-teal-50",
    size === "sm" && "text-2xl md:text-3xl",
    className
    )}>
        {children}
    </Comp>
)

}