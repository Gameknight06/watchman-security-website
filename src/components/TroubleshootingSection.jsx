

export const TroubleshootingSection = () => {
  return (
    <section className={"min-h-324 relative flex flex-col items-center"}>
        <div className={"bg-background h-200 w-full items-center justify-center flex"}>
            <div className={"container mx-auto max-w-4xl"}>
                <h1 className={"text-3xl md:text-5xl font-bold -tracking-tight"}>
                    Need help troubleshooting a control panel?
                </h1>
                <h3 className={"text-xs md:text-lg font-bold mt-12"}>
                    Use these PDFs to view the manuals to troubleshoot your control panel.
                </h3>
                <div className={"gap-6 py-10 text-center flex flex-col items-center justify-center m-6"}>
                    <h2 className={"text-xs md:text-xl font-bold mt-8"}>
                        <span>Security Panel #1 </span>
                        <a href="/securitysignhouse.jpg"
                           className="text-muted-foreground hover:text-primary transition-colors underline"
                           target={"_blank"} rel={"noreferrer"}>
                            SecurityPane#1.pdf
                        </a>
                    </h2>
                    <h2 className={"text-xs md:text-xl font-bold mt-8"}>
                        <span>Security Panel #2 </span>
                        <a href="/securitysignhouse.jpg"
                           className="text-muted-foreground hover:text-primary transition-colors underline"
                           target={"_blank"} rel={"noreferrer"}>
                            SecurityPane#2.pdf
                        </a>
                    </h2>
                    <h2 className={"text-xs md:text-xl font-bold mt-8"}>
                        <span>Security Panel #3 </span>
                        <a href="/securitysignhouse.jpg"
                           className="text-muted-foreground hover:text-primary transition-colors underline"
                           target={"_blank"} rel={"noreferrer"}>
                            SecurityPane#3.pdf
                        </a>
                    </h2>
                </div>
            </div>
        </div>
    </section>
  );
};