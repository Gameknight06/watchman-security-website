

export const TroubleshootingSection = () => {
  return (
    <section className={"min-h-156 relative flex flex-col items-center justify-center mt-25"}>
        <div className={"container mx-auto max-w-95 md:max-w-6xl flex flex-col md:flex-row md:gap-25 bg-background rounded-3xl shadow-xs mt-15 md:min-w-335 md:min-h-150 animate-fade-in items-center justify-center"}>
            <div className={"md:gap-8 md:py-16 text-center flex flex-col items-center justify-center m-6"}>
                <h1 className={"text-3xl md:text-5xl font-bold -tracking-tight"}>
                    Need help troubleshooting an alarm system?
                </h1>
                <h3 className={"text-sm md:text-lg font-bold mt-12"}>
                    Find the panel you have and click the download button below it to download its manual.
                </h3>
                <div className={"pt-15 opacity-0 animate-fade-in-delay-4 flex flex-col md:flex-row md:grid-cols-3 items-center justify-center gap-10 md:gap-4 min-w-full"}>
                    <div className={"flex flex-col items-center justify-center gap-3"}>
                        <div className={"w-80 h-80 rounded-xl border-2 overflow-hidden bg-card"}>
                            <img src={"/AlarmPanel.jpg"} alt={"Alarm Panel"}
                                 className={"w-full h-full object-cover"}/>
                        </div>
                        <a href={"/WatchmanSecurityLogo.svg"} className={"buttonDownload w-40 md:size-2/3 rounded-xl shadow-2xl"}>
                            <span className={"text-xs md:text-2xl"}>Download</span>
                        </a>
                    </div>
                    <div className={"flex flex-col items-center justify-center gap-3"}>
                        <div className={"w-80 h-80 rounded-xl border-2 overflow-hidden bg-card"}>
                            <img src={"/AlarmKeypad.jpg"} alt={"Alarm Panel"}
                                 className={"w-full h-full object-cover"}/>
                        </div>
                        <a href={"/WatchmanSecurityLogo.svg"} className={"buttonDownload w-40 md:size-2/3 rounded-xl shadow-2xl"}>
                            <span className={"text-xs md:text-2xl"}>Download</span>
                        </a>
                    </div>
                    <div className={"flex flex-col items-center justify-center gap-3"}>
                        <div className={"w-80 h-80 rounded-xl border-2 overflow-hidden bg-card"}>
                            <img src={"/OtherKeypad.jpg"} alt={"Alarm Panel"}
                                 className={"w-full h-full object-cover"}/>
                        </div>
                        <a href={"/WatchmanSecurityLogo.svg"} className={"buttonDownload w-40 md:size-2/3 rounded-xl shadow-2xl"}>
                            <span className={"text-xs md:text-2xl"}>Download</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};