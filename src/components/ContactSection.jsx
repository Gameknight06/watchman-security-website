

export const ContactSection = () => {
    return (
        <section id={"contact"} className={"min-h-3/4 min-w-screen relative flex flex-col items-center justify-center px-4"}>
            <div className={"container mx-auto max-w-5xl md:gap-16 grid grid-cols-1 md:grid-cols-2 border-b-1 border-t-1 border-primary items-center justify-center mt-10"}>
                <div className={"gap-8 py-12 text-left flex flex-col justify-center m-2"}>
                    <h1 className={"text-3xl md:text-5xl font-bold -tracking-tight"}>
                        Contact Us
                    </h1>
                    <h4 className={"text-sm md:text-lg font-bold mt-6"}>
                        Need help with a technical issue?
                    </h4>
                    <h4 className={"text-sm md:text-lg font-bold"}>
                        Want to discuss monitoring services?
                    </h4>
                    <h4 className={"text-sm md:text-lg font-bold"}>
                        Or just want advice on parts and hardware?
                    </h4>
                </div>
                <div className={"gap-2 md:gap-8 py-12 text-left flex flex-col justify-center m-2"}>
                    <h2 className={"text-sm md:text-xl font-bold mt-8"}>
                        <span>Email us: </span>
                        <a href="mailto:info@watchmansecurityllc.com" className="text-muted-foreground hover:text-primary transition-colors underline">
                            Info@watchmansecurityllc.com
                        </a>
                    </h2>
                    <h2 className={"text-sm md:text-xl font-bold"}>
                        <span>Or give us a call at </span>
                        <a href="tel:+19183989069" className="text-muted-foreground hover:text-primary transition-colors underline">
                            918-398-9069
                        </a>
                    </h2>
                </div>
            </div>
        </section>
    );
};