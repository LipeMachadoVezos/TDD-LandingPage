import Image from "next/image"
import { Button } from "../components/Button"

export function Footer() {
    return (
        <>
            <section className="relative flex justify-center items-top w-full h-[50vh] backdrop-blur-md bg-footer bg-cover bg-right sm:bg-center gap-8 px-4 py-16">
                <Image className="absolute -top-80 right-0" src={'/MapFooter.png'} width={500} height={0} alt="" />
                <div className="flex flex-col justify-center items-center gap-10">
                    <div>
                        <h1 className="font-semibold text-[35px] text-white">
                            ficou com dúvidas?
                            <br />
                            contate-nos aqui:
                        </h1>
                    </div>
                    <div className="flex justify-center items-center gap-8">
                        <Button
                            link=""
                            className="bg-[#AE2484] hover:bg-[#db33a8] px-24"
                        >
                            Whatsapp
                        </Button>
                        <Button
                            link=""
                            className="bg-[#AE2484] hover:bg-[#db33a8] px-24"
                        >
                            E-email
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}