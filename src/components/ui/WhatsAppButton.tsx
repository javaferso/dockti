// components/ui/WhatsAppButton.tsx
import { motion } from 'framer-motion';
import { IoLogoWhatsapp } from 'react-icons/io5';

const WhatsAppButton = () => {
    const phoneNumber = '+56912345678'; // Reemplaza con tu número
    const message = '¡Hola! Me gustaría obtener más información sobre sus servicios.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <button className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full hover:bg-green-600 transition-colors">
                    <IoLogoWhatsapp className="w-8 h-8 text-white" />
                </button>
            </div>
            
            {/* Tooltip */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute right-16 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-lg hidden md:block"
            >
                <p className="text-sm text-gray-700 dark:text-gray-200 whitespace-nowrap">
                    ¡Chatea con nosotros!
                </p>
            </motion.div>
        </motion.a>
    );
};

export default WhatsAppButton;