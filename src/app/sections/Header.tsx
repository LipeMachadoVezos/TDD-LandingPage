"use client"

import { Button } from "../components/Button";
import Image from "next/image";
import { motion } from "framer-motion"

export function Header() {
    return (
        <>
            <header className="flex-col xl:flex-row flex justify-center items-center w-full h-full xl:h-screen backdrop-blur-md bg-header bg-cover bg-center gap-20 py-20 xl:py-0">
                <div className="w-[80%] lg:w-[50%] xl:max-w-[38%] text-[#F1A632]">
                    <motion.h1
                        className="font-semibold text-[25px] md:text-[40px] mb-10"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Faça com que seus professores e educadores públicos alcancem um nível
                        de motivação e desempenho jamais atingido.
                    </motion.h1>
                    <div className="flex flex-col gap-4">
                        <motion.h2
                            className="text-white text-2xl"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Confira um trecho do nosso material.
                        </motion.h2>
                        <motion.input
                            className="py-3 px-2 rounded focus:outline-none focus:ring-2 ring-[#F1A632] ring-inset text-black"
                            type="text"
                            placeholder="Seu nome:"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        />
                        <motion.input
                            className="py-3 px-2 rounded focus:outline-none focus:ring-2 ring-[#F1A632] ring-inset text-black"
                            type="email"
                            placeholder="Seu melhor e-mail:"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        />
                        <Button
                            link="/"
                            className="bg-[#F5AA25] hover:bg-[#E0A336]"
                        >
                            Fazer download gratuitamente
                        </Button>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image className="w-72 sm:w-auto" src="/ImageHeader.png" width={600} height={0} alt="" />
                </motion.div>
            </header>
        </>
    )
}