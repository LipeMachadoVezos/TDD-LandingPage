"use client"

import { CardTeam } from "../components/CardTeam";
import { motion } from "framer-motion"

export function Team() {
    return (
        <>
            <section className="flex-col flex justify-center items-center w-full h-full xl:h-screen backdrop-blur-md bg-team bg-cover bg-center gap-6 px-4 py-20 xl:py-0">
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="font-semibold text-[25px] md:text-[40px] text-[#F1A632] text-center">
                        Conheça quem vai te acompanhar durante a trilha:
                    </h1>
                </motion.div>
                <motion.div
                    className="w-[80%] lg:w-[50%] xl:w-[44%] font-semibold text-lg md:text-xl text-white text-center mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <h2>
                        A Viver Editora escalou três autores com sólida formação acadêmica e larga experiência
                        profissional. Cada um têm estudos e vivências em áreas diversas, mas há algo muito
                        importante em comum: são professores!
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14"
                >
                    <CardTeam
                        image="/team/braga.png"
                        title="Antonio Braga"
                        description="É professor, teólogo, terapeuta de família e escritor. É mestre em Ciências da Religião e tem auxiliado dezenas de empresas e milhares de profissionais na área de desenvolvimento das competências pessoais."
                    />
                    <CardTeam
                        image="/team/derson.png"
                        title="Derson Lopes"
                        description="É doutor em Administração pela Unicamp. Atua como docente de ensino superior e lato sensu há 14 anos, e como facilitador de grandes empresas internacionais, treinando executivos das maiores empresas do país."
                    />
                    <CardTeam
                        image="/team/cristina.png"
                        title="Cristina Zukowski"
                        description="É pós-doutora em Educação pela USP. Foi professora e gestora por muitos anos na educação básica e superior. Publicou diversos livros e artigos na área de formação de professores e avaliação educacional. Atua preparando profissionais para a docência na educação básica e superior, seja nas licenciaturas, na pós-graduação ou como convidada em redes de ensino e escolas."
                    />
                </motion.div>
            </section>
        </>
    )
}