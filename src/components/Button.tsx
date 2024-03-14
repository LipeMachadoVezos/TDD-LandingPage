import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    link: string;
}

export function Button({ link, children, className }: ButtonProps) {
    return (
        <>
            <Link
                href={link}
                target="_blank"
                className={twMerge("text-center text-white py-3 px-6 rounded mt-4 transition-colors", className)}
            >
                {children}
            </Link>
        </>
    )
}