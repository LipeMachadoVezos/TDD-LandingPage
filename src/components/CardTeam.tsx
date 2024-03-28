import Image from "next/image";

interface CardTeamProps {
    image: string;
    title: string;
    description: string;
}

export function CardTeam({ image, title, description }: CardTeamProps) {
    return (
        <>
            <div className="border-b-8 border-[#F5AA25] bg-white px-3 pt-3 pb-4 rounded flex flex-col justify-start items-start max-w-[300px] gap-4">
                <div className="w-full flex justify-start items-center">
                    <Image src={image} alt="" width={300} height={250} />
                </div>
                <div>
                    <h2 className="text-2xl text-[#AE2484] font-bold">
                        {title}
                    </h2>
                </div>
                <div>
                    <p className="text-sm">
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}