"use client"

import { Articles } from "@/components/Articles";
import { Button } from "@/components/Button";
import { faqData } from "@/data/faq";
import { motion } from "framer-motion"

export function Faq() {
    return (
        <>
            <section className="flex-col flex justify-center items-center w-full h-full backdrop-blur-md bg-faq bg-cover gap-8 px-4 pt-16 pb-60 xl:pb-16">
                <div>
                    <motion.h1
                        className="font-semibold text-[25px] md:text-[40px] mb-10 mt-0 md:mt-32 text-white text-center sm:text-start"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Perguntas frequentes
                    </motion.h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-4">
                    {faqData.map((item, key) => (
                        <Articles key={key} title={item.title} description={item.description} />
                    ))}
                </div>
                <Button
                    link="https://loja.vivereditora.com.br/produto/trilha-de-desenvolvimento-docente/"
                    className="bg-[#F5AA25] hover:bg-[#E0A336]"
                >
                    Quero trilhar esse caminho agora mesmo!
                </Button>
            </section>
        </>
    )
}