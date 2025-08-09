import {ArrowUp} from "lucide-react";
import {ContactSection} from "./ContactSection.jsx";


export const Footer = () => {

    return <footer className="py-12 px-6 bg-card relative border-t border-border mt-50 pt-8 flex flex-wrap justify-center items-center gap-8">
        <div className={"flex flex-col items-center justify-center gap-8 w-full"}>
            <div>
                <ContactSection/>
            </div>
            <div className={"w-full flex items-center justify-between gap-4 md:px-15"}>
                <img src={"/WatchmanSecurityLogo.svg"} alt={"Watchman Security Logo"} className={"w-24"}
                     draggable={false}/>

                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Watchman Security. All rights reserved.
                </p>

                <a href="#hero"
                   className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300">
                    <ArrowUp size={20}/>
                </a>
            </div>
        </div>
    </footer>
}