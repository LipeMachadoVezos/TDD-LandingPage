import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex justify-center items-center w-full h-screen bg-header gap-10">
        <div className="max-w-[38%] text-[#F1A632]">
          <h1 className="font-semibold text-[40px] mb-10">
            Faça com que seus professores e educadores públicos alcancem um nível
            de motivação e desempenho jamais atingido.
          </h1>
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-2xl">Confira um trecho do nosso material.</h2>
            <input className="py-3 px-2 rounded focus:outline-none focus:ring-2 ring-[#F1A632] ring-inset text-black" type="text" placeholder="Seu nome:" />
            <input className="py-3 px-2 rounded focus:outline-none focus:ring-2 ring-[#F1A632] ring-inset text-black" type="email" placeholder="Seu melhor e-mail:" />
            <button className="bg-[#F1A632] hover:bg-[#F1A632]/80 text-white py-3 rounded">Fazer download gratuitamente</button>
          </div>
        </div>
        <div>
          <Image src={'/imageHeader.png'} width={600} height={0} alt="" />
        </div>
      </header>
    </>
  );
}
