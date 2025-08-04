

export const TroubleshootingSection = () => {
  return (
    <section className={"min-h-156 relative flex flex-col items-center justify-center"}>
        <div className={"container mx-auto max-w-95 md:max-w-6xl flex flex-col md:flex-row md:gap-25 bg-background rounded-3xl shadow-xs mt-15 md:min-w-300 md:min-h-150 animate-fade-in"}>
            <div className={"md:gap-8 md:py-16 text-center flex flex-col items-center justify-center m-6"}>
                <h1 className={"text-3xl md:text-5xl font-bold -tracking-tight"}>
                    Need help troubleshooting an alarm system?
                </h1>
                <h3 className={"text-sm md:text-lg font-bold mt-12"}>
                    You can use these PDFs to view the manuals to troubleshoot your alarm system.
                </h3>
                <div
                    className={"pt-15 opacity-0 animate-fade-in-delay-4 flex flex-col items-center justify-center gap-8 min-w-full"}>
                    <a href={"#contact"} className={"buttonDownload w-40 md:size-2/3"}>
                        <span className={"text-xs md:text-2xl"}>Alarm Panel 1</span>
                    </a>
                    <a href={"#payment"} className={"buttonDownload w-40 md:size-2/3"}>
                        <span className={"text-xs md:text-2xl"}>Alarm Panel 2</span>
                    </a>
                    <a href={"#about"} className={"buttonDownload w-40 md:size-2/3"}>
                        <span className={"text-xs md:text-2xl"}>Alarm Panel 3</span>
                    </a>
                </div>
            </div>
            <div className={"md:py-16 text-center flex flex-col items-center justify-center m-6"}>
                <img src={"/AlarmBox.jpg"} alt={"Alarm Box Image"} className={"w-70 md:w-full rounded-lg"}/>
            </div>
        </div>
    </section>
  );
};