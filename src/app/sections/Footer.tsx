"use client"

import Image from "next/image"
import { Button } from "../components/Button"
import { motion } from "framer-motion"

export function Footer() {
    return (
        <>
            <section className="relative flex justify-center items-top w-full h-[50vh] backdrop-blur-md bg-footer bg-cover bg-right sm:bg-center gap-8 px-4 py-16">
                <Image className="hidden md:block w-[50%] md:w-[30%] lg:w-[25%] xl:w-[30%] absolute -top-40 lg:-top-80 right-0" src={'/MapFooter.png'} width={500} height={0} alt="" />
                <div className="flex flex-col justify-center items-center gap-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h1 className="font-semibold text-[35px] text-white">
                            ficou com dúvidas?
                            <br />
                            contate-nos aqui:
                        </h1>
                    </motion.div>
                    <div className="flex-col flex sm:flex-row justify-center items-center gap-8 w-full">
                        <Button
                            link=""
                            className="bg-[#AE2484] hover:bg-[#db33a8] w-full"
                        >
                            Whatsapp
                        </Button>
                        <Button
                            link=""
                            className="bg-[#AE2484] hover:bg-[#db33a8] w-full"
                        >
                            E-email
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}