import {useIntersectionObserver} from "../hooks/useIntersectionObserver.js";
import React from "react";


export const TroubleshootingSection = () => {
    const [h1Ref, isH1Visible] = useIntersectionObserver({ threshold: 0.5 });
    const [h2Ref, isH2Visible] = useIntersectionObserver({ threshold: 0.5 });
    const [image1Ref, isImage1Visible] = useIntersectionObserver({ threshold: 0.2 });
    const [image2Ref, isImage2Visible] = useIntersectionObserver({ threshold: 0.2 });
    const [image3Ref, isImage3Visible] = useIntersectionObserver({ threshold: 0.2 });
    const [image4Ref, isImage4Visible] = useIntersectionObserver({ threshold: 0.2 });


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
                    Find the keypad that matches your system and click to view the user manual
                </h3>
                <div
                    className={"pt-15 opacity-0 animate-fade-in-delay-4 flex flex-col md:flex-row md:grid-cols-3 items-center justify-center gap-10 md:gap-15 min-w-full mb-15"}>
                    <div
                        ref={image1Ref}
                        className={`flex flex-col items-center justify-center gap-3 opacity-0 ${isImage1Visible ? 'animate-fade-in-up md:animate-fade-in-left' : ''}`}>
                        <div className={"w-60 h-60 rounded-xl border-2 overflow-hidden bg-card"}>
                            <img src={"/DSCPanel.jpg"} alt={"Alarm Panel"}
                                 className={"w-full h-full object-cover"}/>
                        </div>
                        <a href={"/DSC-UserGuide-PC1616.pdf"}
                           className={"animated-button shadow-2xl"}>
                            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                            <span className="text">View User Manual</span>
                            <span className="circle"></span>
                            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div
                        ref={image2Ref}
                        className={`flex flex-col items-center justify-center gap-3 opacity-0 ${isImage2Visible ? 'animate-fade-in-up' : ''}`}>
                        <div className={"w-60 h-60 rounded-xl border-2 overflow-hidden bg-card"}>
                            <img src={"/2GIGEdge.jpg"} alt={"Alarm Panel"}
                                 className={"w-full h-full object-cover"}/>
                        </div>
                        <a href={"/10029908-Rev-A-2GIG-Edge-User-Guide-0322_WEB.pdf"}
                           className={"animated-button shadow-2xl"}>
                            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                            <span className="text">View User Manual</span>
                            <span className="circle"></span>
                            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div
                        ref={image3Ref}
                        className={`flex flex-col items-center justify-center gap-3 opacity-0 ${isImage3Visible ? 'animate-fade-in-up md:animate-fade-in-up' : ''}`}>
                        <div className={"w-60 h-60 rounded-xl border-2 overflow-hidden bg-card"}>
                            <img src={"/6150PanelImage.png"} alt={"Alarm Panel 6150"}
                                 className={"w-full h-full object-cover"}/>
                        </div>
                        <a href={"/Vista-20P-Users-Guide.pdf"}
                           className={"animated-button shadow-2xl"}>
                            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                            <span className="text">View User Manual</span>
                            <span className="circle"></span>
                            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div
                        ref={image4Ref}
                        className={`flex flex-col items-center justify-center gap-3 opacity-0 ${isImage4Visible ? 'animate-fade-in-up md:animate-fade-in-right' : ''}`}>
                        <div className={"w-60 h-60 rounded-xl border-2 overflow-hidden bg-card"}>
                            <img src={"/GC2Panel.jpg"} alt={"Alarm Panel"}
                                 className={"w-full h-full object-contain"}/>
                        </div>
                        <a href={"/2GIG-GC2_User-Guide.pdf"}
                           className={"animated-button shadow-2xl"}>
                            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                            <span className="text">View User Manual</span>
                            <span className="circle"></span>
                            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};