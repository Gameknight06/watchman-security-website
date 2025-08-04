


export const HeroSection = () => {
    return (
        <section id={"hero"} className="min-h-156 relative flex flex-col items-center justify-center mt-50">
                <div className={"container max-w-5xl mx-auto relative z-10"}>
                    <div className={"space-y-6"}>
                        <h1 className={"text-4xl md:text-6xl font-bold -tracking-tight"}>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Watchman</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-2"> Security</span>
                        </h1>

                        <p className={"text-lg md:text-xl text-center font-semibold max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3"}>
                            Alarm monitoring and technical support for your home or business.
                        </p>

                        <div className={"pt-7 opacity-0 animate-fade-in-delay-4 flex items-center justify-center gap-2 md:gap-4"}>
                            <a href={"#message"} className={"btn-nm size-2/5 md:size-2/3 bg-gray-300"}>
                                <span className={"text-xs md:text-2xl"}>Contact Us</span>
                            </a>
                            <a href={"#payment"} className={"btn-nm size-2/5 md:size-2/3 bg-gray-300"}>
                                <span className={"text-xs md:text-2xl"}>Pay A Bill</span>
                            </a>
                            <a href={"#about"} className={"btn-nm size-2/5 md:size-2/3 bg-gray-300 "}>
                                <span className={"text-xs md:text-2xl"}>Learn More</span>
                            </a>
                        </div>
                    </div>
                </div>
        </section>
    );
};
