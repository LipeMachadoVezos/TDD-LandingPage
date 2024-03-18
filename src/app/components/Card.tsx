"use client"

import { Icon } from "./Icon";
import { motion } from "framer-motion"

interface CardProps {
    icon: string;
}

export function Card({ icon }: CardProps) {
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
                        Desenvolvimento Pessoal
                    </h2>
                </div>
                <div>
                    <p>
                        O profissional irá refletir sobre o conhecimento que tem de si,
                        a rever propósitos e a pensar sobre perdas e desafios ao longo
                        da vida. Nesse caminho para dentro de si mesmo, é trabalhado o
                        conceito de felicidade e a responsabilidade individual de criar
                        meios para alcançá-la.
                    </p>
                </div>
            </motion.div>
        </>
    )
}