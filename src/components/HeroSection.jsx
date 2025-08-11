


export const HeroSection = () => {
    return (
        <section id={"hero"} className="min-h-156 relative flex flex-col items-center justify-center md:mt-50 mt-25">
                <div className={"container max-w-5xl mx-auto relative z-10"}>
                    <div className={"space-y-6"}>
                        <h1 className={"text-3xl md:text-7xl font-bold -tracking-tight"}>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Watchman</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-2"> Security LLC</span>
                        </h1>

                        <p className={"text-sm md:text-2xl text-center font-semibold max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3"}>
                            Security installation and service for your home or business
                        </p>
                    </div>
                </div>
        </section>
    );
};
