import {ArrowDown} from "lucide-react";
import {useIntersectionObserver} from "../hooks/useIntersectionObserver.js";


export const PaymentSection = () => {
    const [h1Ref, isH1Visible] = useIntersectionObserver({ threshold: 0.5 });
    const [p1Ref, isP1Visible] = useIntersectionObserver({ threshold: 0.5 });
    const [p2Ref, isP2Visible] = useIntersectionObserver({ threshold: 0.5 });
    const [imagesRef, isImagesVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section id={"payment"} className="min-h-156 relative flex flex-col items-center justify-center mt-25">
            <div className={"container mx-auto max-w-95 md:max-w-6xl flex flex-col bg-background rounded-3xl shadow-xs mt-15 md:mb-15 md:min-w-335 md:min-h-150 items-center justify-center"}>
                <h1
                    ref={h1Ref}
                    className={`text-3xl md:text-5xl font-bold -tracking-tight mt-10 opacity-0 ${isH1Visible ? 'animate-fade-in-down' : ''}`}>Need to pay a bill?</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-16 mb-8">
                    <p
                        ref={p1Ref}
                        className={`text-muted-foreground text-sm md:text-xl font-bold md:text-left md:col-start-1 md:row-start-1 md:self-end opacity-0 ${isP1Visible ? 'animate-fade-in-down md:animate-fade-in-left' : ''}`}
                    >
                        You should receive an email with an amount to pay and a link to follow to complete the payment.
                    </p>

                    <div
                        ref={imagesRef}
                        className={`flex flex-col items-center justify-center gap-8 md:col-start-2 md:row-start-1 md:row-span-2 md:border-l-2 md:border-black md:pl-12 opacity-0 ${isImagesVisible ? 'animate-fade-in-up md:animate-fade-in-right' : ''}`}
                    >
                        <img src={"/InvoiceExample.png"} alt={"Example of an invoice email from Watchman Security"} className={"w-100 md:w-150 border-2 rounded-md"}/>
                        <ArrowDown/>
                        <img src={"/PayLinkExample.png"} alt={"Example of the pay link in an invoice email"} className={"w-100 md:w-150 border-2 rounded-md"}/>
                    </div>

                    <p
                        ref={p2Ref}
                        className={`text-muted-foreground text-sm md:text-xl font-bold text-center md:text-left md:col-start-1 md:row-start-2 md:self-start md:mt-15 opacity-0 ${isP2Visible ? 'animate-fade-in-up md:animate-fade-in-left' : ''}`}
                    >
                        If you do not see this email and want another to be sent, just contact us through the contact page or use the message form above to let us know you need a new link.
                    </p>
                </div>
            </div>
        </section>
    );
};