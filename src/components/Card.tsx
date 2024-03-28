"use client"

import { Icon } from "./Icon";
import { motion } from "framer-motion"

interface CardProps {
    icon: string;
    title: string;
    text: string;
}

export function Card({ icon, title, text }: CardProps) {
    return (
        <>
            <motion.div
                className="w-full md:w-96 bg-[#AE2484] rounded rounded-br-[30%] pt-16 px-8 py-10 relative text-white flex flex-col gap-3"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5 }}
            >
                <Icon
                    icon={icon}
                />
                <div>
                    <h2 className="font-bold text-lg xl:text-xl">
                        {title}
                    </h2>
                </div>
                <div>
                    <p>
                        {text}
                    </p>
                </div>
            </motion.div>
        </>
    )
}