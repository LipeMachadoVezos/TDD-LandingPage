import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex justify-center items-center w-full h-screen bg-header gap-10">
        <div className="border-2 border-red-600 max-w-[30%] text-[#F1A632]">
          <h2>
            Faça com que seus professores e educadores públicos alcancem um nível
            de motivação e desempenho jamais atingido.
          </h2>
        </div>
        <div>
          <Image src={'/imageHeader.png'} width={760} height={620} alt="" />
        </div>
      </header>
    </>
  );
}
