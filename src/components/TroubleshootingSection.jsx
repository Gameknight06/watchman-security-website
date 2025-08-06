import {useIntersectionObserver} from "../hooks/useIntersectionObserver.js";


export const TroubleshootingSection = () => {
    const [h1Ref, isH1Visible] = useIntersectionObserver({ threshold: 0.5 });
    const [h2Ref, isH2Visible] = useIntersectionObserver({ threshold: 0.5 });
    const [image1Ref, isImage1Visible] = useIntersectionObserver({ threshold: 0.2 });
    const [image2Ref, isImage2Visible] = useIntersectionObserver({ threshold: 0.2 });
    const [image3Ref, isImage3Visible] = useIntersectionObserver({ threshold: 0.2 });


    return (
    <section className={"min-h-156 relative flex flex-col items-center justify-center mt-25"}>
        <div className={"container mx-auto max-w-95 md:max-w-6xl flex flex-col md:flex-row md:gap-25 bg-background rounded-3xl shadow-xs mt-15 md:min-w-335 md:min-h-150 animate-fade-in items-center justify-center"}>
            <div className={"md:gap-8 md:py-16 text-center flex flex-col items-center justify-center m-6"}>
                <h1
                    ref = {h1Ref}
                    className={`text-3xl md:text-5xl font-bold -tracking-tight opacity-0 ${isH1Visible ? 'animate-fade-in-down' : ''}`}>
                    Need help troubleshooting an alarm system?
                </h1>
                <h3
                    ref = {h2Ref}
                    className={`text-sm md:text-lg font-bold mt-12 opacity-0 ${isH2Visible ? 'animate-fade-in-down' : ''}`}>
                    Find the panel you have and click the download button below it to download its manual.
                </h3>
                <div className={"pt-15 opacity-0 animate-fade-in-delay-4 flex flex-col md:flex-row md:grid-cols-3 items-center justify-center gap-10 md:gap-15 min-w-full"}>
                    <div
                        ref = {image1Ref}
                        className={`flex flex-col items-center justify-center gap-3 opacity-0 ${isImage1Visible ? 'animate-fade-in-up md:animate-fade-in-left' : ''}`}>
                        <div className={"w-80 h-80 rounded-xl border-2 overflow-hidden bg-card"}>
                            <img src={"/AlarmPanel.jpg"} alt={"Alarm Panel"}
                                 className={"w-full h-full object-cover"}/>
                        </div>
                        <a href={"/WatchmanSecurityLogo.svg"} className={"buttonDownload w-40 md:size-2/3 rounded-xl shadow-2xl"}>
                            <span className={"text-xs md:text-2xl"}>Download</span>
                        </a>
                    </div>
                    <div
                        ref = {image2Ref}
                        className={`flex flex-col items-center justify-center gap-3 opacity-0 ${isImage2Visible ? 'animate-fade-in-up' : ''}`}>
                        <div className={"w-80 h-80 rounded-xl border-2 overflow-hidden bg-card"}>
                            <img src={"/AlarmKeypad.jpg"} alt={"Alarm Panel"}
                                 className={"w-full h-full object-cover"}/>
                        </div>
                        <a href={"/WatchmanSecurityLogo.svg"} className={"buttonDownload w-40 md:size-2/3 rounded-xl shadow-2xl"}>
                            <span className={"text-xs md:text-2xl"}>Download</span>
                        </a>
                    </div>
                    <div
                        ref = {image3Ref}
                        className={`flex flex-col items-center justify-center gap-3 opacity-0 ${isImage3Visible ? 'animate-fade-in-up md:animate-fade-in-right' : ''}`}>
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