// components/sections/Home.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/24/outline';


const Home: React.FC = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="relative min-h-screen">
            {/* Background con overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/tech-background.jpg" // Asegúrate de tener esta imagen
                    alt="Technology Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/80" />
            </div>

            {/* Contenido Principal */}
            <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
                <div className="min-h-[80vh] flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Transformamos Ideas en 
                            <span className="text-blue-400"> Soluciones Digitales</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-gray-300 mb-8">
                            Expertos en desarrollo de software, consultoría TI y servicios tecnológicos 
                            que impulsan la transformación digital de tu negocio.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                            >
                                Conoce Nuestros Servicios
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
                            >
                                Contáctanos
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 text-white"
                    >
                        {[
                            { number: "15+", text: "Años de Experiencia" },
                            { number: "500+", text: "Proyectos Exitosos" },
                            { number: "100+", text: "Clientes Satisfechos" },
                            { number: "50+", text: "Profesionales TI" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm"
                            >
                                <h3 className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</h3>
                                <p className="text-gray-300">{stat.text}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Servicios Preview */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-32"
                >
                    <h2 className="text-3xl font-bold text-white text-center mb-12">
                        Nuestras Soluciones
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Desarrollo de Software",
                                description: "Soluciones personalizadas que impulsan tu negocio con las últimas tecnologías.",
                                icon: "💻"
                            },
                            {
                                title: "Consultoría TI",
                                description: "Asesoramiento experto para optimizar tus procesos tecnológicos.",
                                icon: "🔍"
                            },
                            {
                                title: "Servicios Gestionados",
                                description: "Gestión integral de tu infraestructura tecnológica 24/7.",
                                icon: "⚙️"
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer"
                            >
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Partners Section */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    className="mt-32 text-center"
                >
                    <h2 className="text-2xl font-bold text-white mb-8">
                        Confían en Nosotros
                    </h2>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                        {/* Aquí puedes agregar los logos de los partners */}
                        {/* Ejemplo de placeholder para logos */}
                        {[1, 2, 3, 4, 5].map((_, index) => (
                            <div key={index} className="w-32 h-16 bg-white/20 rounded-lg" />
                        ))}
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
                >
                    <ChevronDownIcon className="h-8 w-8" />
                </motion.div>
            </div>
        </div>
    );
};

export default Home;