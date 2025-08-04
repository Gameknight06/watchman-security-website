import {HeroSection} from "../components/HeroSection.jsx";
import {Navbar} from "../components/Navbar.jsx";
import {Footer} from "../components/Footer.jsx";
import {PaymentSection} from "../components/PaymentSection.jsx";
import {TroubleshootingSection} from "../components/TroubleshootingSection.jsx";
import {AboutSection} from "../components/AboutSection.jsx";
import {MessageSection} from "../components/MessageSection.jsx";


export const Home = () => {
    return (
        <div className="min-h-screen text-foreground overflow-hidden">
            <Navbar/>

            <main>
                <HeroSection/>

                <AboutSection/>

                <MessageSection/>


                <PaymentSection/>

                <TroubleshootingSection/>

            </main>

            <Footer/>
        </div>
    );
};