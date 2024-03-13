import Image from "next/image"

interface IconsProps {
    icon: string;
}

export function Icon({ icon }: IconsProps) {
    return (
        <>
            <div
                className="w-[80px] h-[80px] rounded-full bg-white absolute -top-8 shadow-2xl flex justify-center items-center"
            >
                <Image src={icon} alt="" width={55} height={0} />
            </div>
        </>
    )
}