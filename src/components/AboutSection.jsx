import {useIntersectionObserver} from "../hooks/useIntersectionObserver.js";


export const AboutSection = () => {
    const [h1Ref, isH1Visible] = useIntersectionObserver({ threshold: 0.5 });
    const [leftRef, isLeftVisible] = useIntersectionObserver({ threshold: 0.5 });
    const [rightRef, isRightVisible] = useIntersectionObserver({ threshold: 0.5 });


  return (
    <section className={"min-h-200 relative flex flex-col items-center justify-center mt-25"}>
            <div className={"container mx-auto max-w-95 md:min-w-335 py-2 pb-16 px-15 text-center m-6 bg-background rounded-3xl shadow-xs mt-15"}>
                    <div className={"gap-2 md:gap-8 md:py-16 text-center flex flex-col items-center justify-center m-6"}>
                        <h1
                            ref = {h1Ref}
                            className={`text-4xl md:text-5xl font-bold -tracking-tight opacity-0 ${isH1Visible ? 'animate-fade-in-down' : ''}`}>
                            About Us
                        </h1>
                    </div>
                    <div className={"gap-3 md:gap-10 flex flex-col md:flex-row items-center justify-center grid-cols-1 md:grid-cols-2 "}>
                        <div
                            ref = {leftRef}
                            className={`flex md:flex-col md:gap-8 max-w-2xl mx-auto justify-center items-center opacity-0 ${isLeftVisible ? 'animate-fade-in-down md:animate-fade-in-left' : ''}`}>
                            <h2 className={"text-lg md:text-4xl font-bold"}>
                                Watchman Security LLC
                            </h2>
                            <img src={"/WatchmanSecurityLogo.svg"} alt={"Watchman Security Logo"}
                                 className={"w-24 md:w-100"}/>
                        </div>
                        <div
                            ref = {rightRef}
                            className={`text-wrap max-w-2xl mx-auto flex flex-col md:gap-5 opacity-0 ${isRightVisible ? 'animate-fade-in-up md:animate-fade-in-right' : ''}`}>
                            <h2 className={"text-lg md:text-2xl font-bold"}>
                                Proudly based in Oklahoma and installing Alarm systems and devices in both residential
                                and commercial locations.
                            </h2>
                            <p className={"text-sm md:text-xl text-center font-semibold mt-12 max-w-2xl mx-auto"}>
                                Founded in 2004 and proudly based in Oklahoma, Watchman Security has been a trusted name
                                in advanced security solutions for over two decades. We specialize in professional
                                installation and 24/7 monitoring services for both residential and commercial clients,
                                delivering peace of mind with every system we deploy.
                            </p>
                            <p className={"text-sm md:text-xl text-center font-semibold mt-12 max-w-2xl mx-auto"}>
                                Whether you're looking to protect your home, office, or large-scale facility, our team
                                is committed to providing tailored security solutions using state-of-the-art equipment
                                and responsive support. From surveillance systems and access control to intrusion
                                alarms, our services are designed to keep what matters most safe.
                            </p>
                            <p className={"text-sm md:text-xl text-center font-semibold mt-12 max-w-2xl mx-auto"}>
                                At Watchman Security, we believe that security isn't just about technology—it's about
                                trust, reliability, and community. That's why we've built long-lasting relationships
                                with our clients across Oklahoma by staying true to our values: integrity,
                                professionalism, and dedication to your safety.
                            </p>
                        </div>
                    </div>
            </div>
    </section>
  );
};