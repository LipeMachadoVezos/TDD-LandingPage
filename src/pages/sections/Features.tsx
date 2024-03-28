"use client"

import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { motion } from "framer-motion"

export function Features() {
    return (
        <>
            <section className="flex-col flex justify-center items-center w-full h-full xl:h-screen backdrop-blur-md bg-features bg-cover bg-center gap-20 px-4 py-20 xl:py-0">
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="font-semibold text-[25px] md:text-[40px] mb-10 text-white text-center sm:text-start">
                        A TDD está organizada em 3 áreas do desenvolvimento
                    </h1>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 xl:gap-5">
                    <Card
                        icon="/IconDesenvolvimentoPessoal.png"
                        title="Desenvolvimento Pessoal"
                        text="O profissional irá refletir sobre o conhecimento que tem de si,
                        a rever propósitos e a pensar sobre perdas e desafios ao longo
                        da vida. Nesse caminho para dentro de si mesmo, é trabalhado o
                        conceito de felicidade e a responsabilidade individual de criar
                        meios para alcançá-la."
                    />
                    <Card
                        icon="/IconDesenvolvimentoProfissional.png"
                        title="Desenvolvimento Profissional"
                        text="Na segunda etapa, o servidor vai aprender métodos comprovadamente
                         eficazes de gestão de tempo, rotina e projetos. São técnicas sistemáticas
                          que o guiarão rumo a uma produtividade real no dia a dia, equilibrada
                           com as outras demandas da vida."
                    />
                    <Card
                        icon="/IconDesenvolvimentoPedagogico.png"
                        title="Desenvolvimento Pedagógico"
                        text="Na última fase, o profissional entra em contato com inovações
                         tecnológicas e novos métodos de ensino adequados à realidade da educação
                          no Brasil. Com os exercícios de autoavaliação, ele poderá reavaliar a
                           própria forma de atuar,e assim contribuir para o desenvolvimento
                            de sua comunidade."
                    />
                </div>
                <Button
                    link="https://loja.vivereditora.com.br/produto/trilha-de-desenvolvimento-docente/"
                    className="bg-[#6C00C4] hover:bg-[#802FC2]"
                >
                    Quero trilhar esse caminho agora mesmo!
                </Button>
            </section>
        </>
    )
}