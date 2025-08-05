import {ArrowDown} from "lucide-react";


export const PaymentSection = () => {
    return (
        <section id={"payment"} className="min-h-156 relative flex flex-col items-center justify-center">
            <div className={"container mx-auto max-w-95 md:max-w-6xl flex flex-col bg-background rounded-3xl shadow-xs mt-15 md:mb-15 md:min-w-335 md:min-h-150 animate-fade-in items-center justify-center"}>
                <h1 className={"text-3xl md:text-5xl font-bold -tracking-tight"}>Need to pay a bill?</h1>
                <div className={"md:gap-8 md:py-16 flex flex-col md:flex-row md:grid-cols-2 items-center justify-center m-6"}>
                        <div className={"flex flex-col items-center justify-center gap-8 max-w-2xl"}>
                            <p className={"text-muted-foreground text-lg md:text-2xl font-bold"}>
                                You should receive an email with an amount to pay and a link to go to everytime you need to pay a bill.
                            </p>
                            <p className={"text-muted-foreground text-lg md:text-2xl font-bold"}>
                                If you do not see this email and want another to be sent, just contact us through the contact page or use the message form above to let us know you need a new link.
                            </p>
                        </div>
                        <div className={"flex flex-col items-center justify-center gap-8 max-w-2xl"}>
                            <img src={"/public/InvoiceExample.png"} alt={"Email Name Image"} className={"w-40 md:w-150 border-2"}/>
                            <ArrowDown/>
                            <img src={"/public/PayLinkExample.png"} alt={"Email Name Image"} className={"w-40 md:w-150 border-2"}/>
                        </div>
                    </div>
                </div>
        </section>
    );
};