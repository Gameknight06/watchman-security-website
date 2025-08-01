

export const PaymentSection = () => {
    return (
        <section id={"payment"} className="min-h-324 relative flex flex-col items-center">
            <div className={"bg-background h-200 w-full items-center justify-center flex"}>
                <div className={"container mx-auto max-w-4xl"}>
                    <h1 className={"text-3xl md:text-5xl font-bold -tracking-tight"}>Need to pay a bill?</h1>
                    <div className={"gap-6 py-16 text-center flex flex-col items-center justify-center m-6"}>
                        <div className={"flex flex-col items-center justify-center gap-8 max-w-2xl"}>
                            <p className={"text-muted-foreground text-3xl font-bold"}>
                                At Watchman Security, we use Quickbooks, a leading provider of accounting software.
                            </p>
                            <p className={"text-muted-foreground text-2xl font-bold"}>
                                You can either use the link given in the email about your bill, or click the link below
                                to enter your information and process your payment.
                            </p>
                        </div>

                        <div className={"flex items-center justify-center pt-16"}>
                            <a className={"btn-qb"} href={"https://quickbooks.com/us/en-us/"} target={"_blank"}
                               rel={"noreferrer"}>
                                <span>quickbooks</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};