import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex-col xl:flex-row flex justify-center items-center w-full h-full xl:h-screen backdrop-blur-md bg-header bg-cover bg-center gap-20 py-20 xl:py-0">
        <div className="w-[80%] lg:w-[50%] xl:max-w-[38%] text-[#F1A632]">
          <h1 className="font-semibold text-[25px] md:text-[40px] mb-10">
            Faça com que seus professores e educadores públicos alcancem um nível
            de motivação e desempenho jamais atingido.
          </h1>
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl">Confira um trecho do nosso material.</h2>
            <input className="py-3 px-2 rounded focus:outline-none focus:ring-2 ring-[#F1A632] ring-inset text-black" type="text" placeholder="Seu nome:" />
            <input className="py-3 px-2 rounded focus:outline-none focus:ring-2 ring-[#F1A632] ring-inset text-black" type="email" placeholder="Seu melhor e-mail:" />
            <Button
              link="/"
              className="bg-[#F5AA25] hover:bg-[#E0A336]"
            >
              Fazer download gratuitamente
            </Button>
          </div>
        </div>
        <div>
          <Image className="w-72 sm:w-auto" src="/imageHeader.png" width={600} height={0} alt="" loading="lazy" />
        </div>
      </header>
      <section className="flex-col xl:flex-row flex justify-center items-center w-full h-full xl:h-screen backdrop-blur-md bg-aboutus bg-cover bg-center gap-20 py-20 xl:py-0">
        <div>
          <Image className="w-72 sm:w-auto" src="/imageAboutus.png" width={600} height={0} alt="" />
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
      <section className="flex-col flex justify-center items-center w-full h-full xl:h-screen backdrop-blur-md bg-features bg-cover bg-center gap-20 px-4 py-20 xl:py-0">
        <div>
          <h1 className="font-semibold text-[25px] md:text-[40px] mb-10 text-white text-center sm:text-start">
            A TDD está organizada em 3 áreas do desenvolvimento
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 xl:gap-5">
          <Card
            icon="/IconDesenvolvimentoPessoal.png"
          />
          <Card
            icon="/IconDesenvolvimentoProfissional.png"
          />
          <Card
            icon="/IconDesenvolvimentoPedagogico.png"
          />
        </div>
        <div>
          <Button
            link="https://loja.vivereditora.com.br/produto/trilha-de-desenvolvimento-docente/"
            className="bg-[#6C00C4] hover:bg-[#802FC2]"
          >
            Quero trilhar esse caminho agora mesmo!
          </Button>
        </div>
      </section>
    </>
  );
}
