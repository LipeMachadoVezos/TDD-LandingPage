"use client"

import { motion } from "framer-motion"

interface ArticlesProps {
    title: string;
    description: string;
}

export function Articles({ title, description }: ArticlesProps) {
    return (
        <>
            <div className="w-full lg:w-[900px] bg-white py-8 px-4 md:px-16 flex flex-col gap-3">
                <motion.h1
                    className="text-2xl font-semibold text-[#AE2484] max-w-[600px]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {title}
                </motion.h1>
                <motion.p
                    className="text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    {description}
                </motion.p>
            </div>
        </>
    )
}