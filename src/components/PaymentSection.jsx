

export const PaymentSection = () => {
    return (
        <section id={"payment"} className="min-h-156 relative flex flex-col items-center justify-center">
                <div className={"container mx-auto max-w-4xl"}>
                    <h1 className={"text-3xl md:text-5xl font-bold -tracking-tight"}>Need to pay a bill?</h1>
                    <div className={"gap-6 py-16 text-center flex flex-col items-center justify-center m-6"}>
                        <div className={"flex flex-col items-center justify-center gap-8 max-w-2xl"}>
                            <p className={"text-muted-foreground text-lg md:text-2xl font-bold"}>
                                You should receive an email with an amount to pay and a link to go to everytime you need to pay a bill.
                            </p>
                            <p className={"text-muted-foreground text-lg md:text-2xl font-bold"}>
                                If you do not see this email and want another to be sent, just contact us through the contact page or use the message form above to let us know you need a new link.
                            </p>
                        </div>
                    </div>
                </div>
        </section>
    );
};