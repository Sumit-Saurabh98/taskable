import Image from "next/image";

const Heros = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl ">
            <div className="flex items-center">
                <div className="relative w-[400px] h-[400px] sm:w-[450px] sm:h-[450px] md:h-[600px] md:w-[600px]">
                    <Image
                        src="/task.png"
                        alt="task"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="relative h-[500px] w-[500px] hidden md:block">
                    <Image
                        src="/reading.png"
                        alt="reading"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
    </div>
    )
}

export default Heros;