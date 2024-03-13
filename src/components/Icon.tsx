import Image from "next/image"

interface IconsProps {
    icon: string;
}

export function Icon({ icon }: IconsProps) {
    return (
        <>
            <div
                className="w-[85px] h-[85px] rounded-full bg-white absolute -top-8 shadow-2xl"
            >
                <Image src={icon} alt="" width={85} height={85} />
            </div>
        </>
    )
}