import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex-col xl:flex-row flex justify-center items-center w-full h-full xl:h-screen backdrop-blur-md bg-header bg-cover bg-center gap-20 py-20 xl:pt-0">
        <div className="w-[80%] lg:w-[50%] xl:max-w-[38%] text-[#F1A632]">
          <h1 className="font-semibold text-[25px] md:text-[40px] mb-10">
            Faça com que seus professores e educadores públicos alcancem um nível
            de motivação e desempenho jamais atingido.
          </h1>
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl">Confira um trecho do nosso material.</h2>
            <input className="py-3 px-2 rounded focus:outline-none focus:ring-2 ring-[#F1A632] ring-inset text-black" type="text" placeholder="Seu nome:" />
            <input className="py-3 px-2 rounded focus:outline-none focus:ring-2 ring-[#F1A632] ring-inset text-black" type="email" placeholder="Seu melhor e-mail:" />
            <a
              className="bg-[#F1A632] hover:bg-[#F1A632]/80 text-white py-3 rounded"
            >
              Fazer download gratuitamente
            </a>
          </div>
        </div>
        <div>
          <Image className="w-72 sm:w-auto" src="/imageHeader.png" width={600} height={0} alt="" loading="lazy" />
        </div>
      </header>
      <section className="flex-col xl:flex-row flex justify-center items-center w-full h-full xl:h-screen backdrop-blur-md bg-aboutus bg-cover bg-center gap-20 py-20 xl:pt-0">
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
            <Link
              href="https://loja.vivereditora.com.br/produto/trilha-de-desenvolvimento-docente/"
              target="_blank"
              className="bg-[#F1A632] hover:bg-[#F1A632]/80 text-center text-white py-3 rounded mt-4"
            >
              Estou pronto para ver essa mudança!
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
