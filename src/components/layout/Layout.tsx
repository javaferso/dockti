import Navbar from "./Navbar";
import Footer from "./Footer";
import Contacto from "../sections/Contacto";
import Servicios from "../sections/Servicios";
import Home from "../sections/Home";
import HeroSlider from "../sections/HeroSlider";
import Chatbot from "../chat/chatBot";  
import WhatsAppButton from "../ui/WhatsAppButton";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <HeroSlider />
            <main className="flex-grow">{children}</main>
            <Home />
            <Servicios />
            <Contacto />
            <Footer />
            <Chatbot />
            <WhatsAppButton />
        </div>
    );
};

export default Layout;
