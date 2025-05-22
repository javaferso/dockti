// components/sections/HeroSlider.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const slides = [
    {
        id: 1,
        image: '/images/tech-slides.jpg',
        title: 'Soluciones Tecnológicas Innovadoras',
        description: 'Transformamos el futuro de tu negocio con soluciones digitales personalizadas y servicios TI de última generación.',
        cta: 'Conoce Nuestros Servicios'
    },
    {
        id: 2,
        image: '/images/tech-slides_2.jpg',
        title: 'Expertos en Desarrollo de Software',
        description: 'Creamos aplicaciones web y móviles que impulsan el crecimiento de tu empresa con tecnologías de vanguardia.',
        cta: 'Ver Proyectos'
    },
    {
        id: 3,
        image: '/images/tech-slides_3.jpg',
        title: 'Soporte TI Empresarial',
        description: 'Brindamos soporte técnico especializado y mantenimiento 24/7 para mantener tu infraestructura operativa.',
        cta: 'Contáctanos'
    }
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying) {
            interval = setInterval(nextSlide, 5000); // Cambia slide cada 5 segundos
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const slideVariants = {
        enter: {
            opacity: 0,
            scale: 1.1,
        },
        center: {
            zIndex: 1,
            opacity: 1,
            scale: 1,
        },
        exit: {
            zIndex: 0,
            opacity: 0,
            scale: 0.9,
        }
    };

    return (
        <div className="relative h-screen w-full overflow-hidden pt-16"> {/* pt-16 para el navbar */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    {/* Imagen de fondo */}
                    <div className="absolute inset-0">
                        <Image
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].title}
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
                    </div>

                    {/* Contenido */}
                    <div className="relative h-full flex items-center">
                        <div className="container mx-auto px-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="max-w-3xl"
                            >
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                    {slides[currentSlide].title}
                                </h1>
                                <p className="text-xl text-gray-200 mb-8">
                                    {slides[currentSlide].description}
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    {slides[currentSlide].cta}
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Controles de navegación */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-8">
                {/* Flechas de navegación */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <ChevronLeftIcon className="h-6 w-6 text-white" />
                </motion.button>

                {/* Indicadores de slides */}
                <div className="flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentSlide === index 
                                    ? 'bg-white w-8' 
                                    : 'bg-white/50 hover:bg-white/80'
                            }`}
                        />
                    ))}
                </div>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    <ChevronRightIcon className="h-6 w-6 text-white" />
                </motion.button>
            </div>
        </div>
    );
};

export default HeroSlider;