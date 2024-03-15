import { Button } from "../components/Button";
import Image from "next/image";

export function AboutUs() {
    return (
        <>
            <section className="flex-col xl:flex-row flex justify-center items-center w-full h-full xl:h-screen backdrop-blur-md bg-aboutus bg-cover bg-center gap-20 py-20 xl:py-0">
                <div>
                    <Image className="w-72 sm:w-auto" src="/ImageAboutus.png" width={600} height={0} alt="" />
                </div>
                <div className="w-[80%] lg:w-[50%] xl:max-w-[38%] text-[#F1A632]">
                    <h1 className="font-semibold text-[25px] md:text-[40px] mb-10">
                        Deixe sua marca na instituição de ensino que você lidera!
                    </h1>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-white text-2xl">
                            A TDD é um curso interdisciplinar com foco no desenvolvimento integral de professores.
                            São 12 passos que conectam conteúdos e promovem o diálogo entre objetivos e competências
                            para a formação pessoal, profissional e pedagógica.
                        </h2>
                        <h2 className="text-white text-2xl">
                            Os educadores na sua escola serão transformados em profissionais realizados por serem os
                            responsáveis pela educação que muda o futuro de crianças, adolescentes, jovens, adultos
                            e idosos na sua região.
                        </h2>
                        <Button
                            link="https://loja.vivereditora.com.br/produto/trilha-de-desenvolvimento-docente/"
                            className="bg-[#F5AA25] hover:bg-[#E0A336]"
                        >
                            Estou pronto para ver essa mudança!
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}