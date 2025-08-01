


export const HeroSection = () => {
    return (
        <section id={"hero"} className="min-h-324 relative flex flex-col items-center mt-45">
            <div className={"bg-background min-h-200 w-full items-center justify-center flex"}>
                <div className={"container max-w-4xl mx-auto relative z-10"}>
                    <div className={"space-y-6"}>
                        <h1 className={"text-4xl md:text-6xl font-bold -tracking-tight"}>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1 logo-text"> Watchman</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-2 logo-text"> SECURITY</span>
                        </h1>

                        <p className={"text-lg md:text-xs text-center font-semibold max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3"}>
                            Alarm monitoring and technical support for your home or business.
                        </p>

                        <div className={"pt-7 opacity-0 animate-fade-in-delay-4 flex items-center justify-center gap-4"}>
                            <a href={"#contact"} className={"btn-nm md:size-2/3 "}>
                                <span className={"text-xs md:text-2xl"}>Contact Us</span>
                            </a>
                            <a href={"#payment"} className={"btn-nm ml-4 md:size-2/3"}>
                                <span className={"text-xs md:text-2xl"}>Pay A Bill</span>
                            </a>
                            <a href={"#about"} className={"btn-nm ml-4 md:size-2/3"}>
                                <span className={"text-xs md:text-2xl"}>Learn More</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
