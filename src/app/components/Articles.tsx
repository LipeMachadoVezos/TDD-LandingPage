interface ArticlesProps {
    title: string;
    description: string;
}

export function Articles({ title, description }: ArticlesProps) {
    return (
        <>
            <div className="w-full lg:w-[900px] bg-white py-8 px-4 md:px-16 flex flex-col gap-3">
                <h1 className="text-2xl font-semibold text-[#AE2484] max-w-[600px]">
                    {title}
                </h1>
                <p className="text-lg">
                    {description}
                </p>
            </div>
        </>
    )
}