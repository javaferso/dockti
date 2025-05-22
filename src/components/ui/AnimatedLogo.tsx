// components/ui/AnimatedLogo.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AnimatedLogo = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Aseguramos que la hidratación sea consistente
    useEffect(() => {
        setIsMounted(true);
    }, []);


    const textVariants = {
        collapsed: {
            opacity: 0,
            x: -20,
            display: 'none',
        },
        expanded: {
            opacity: 1,
            x: 0,
            display: 'block',
            transition: {
                duration: 0.3,
                ease: 'easeOut',
            }
        }
    };

    const logoVariants = {
        normal: {
            scale: 1,
        },
        hovered: {
            scale: 1.05,
        },
        clicked: {
            scale: 0.95,
        }
    };

    // No renderizamos nada hasta que el componente esté montado
    if (!isMounted) {
        return null;
    }

    return (
        <div className="flex items-center space-x-2">
            <Link href="/">
                <motion.div
                    className="flex items-center cursor-pointer"
                    variants={logoVariants}
                    whileHover="hovered"
                    whileTap="clicked"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {/* Logo Image */}
                    <motion.div
                        className="relative w-12 h-12"
                        layoutId="logo"
                    >
                        <Image
                            src="/images/logo.png"
                            alt="DckTI Logo"
                            width={48}
                            height={48}
                            priority
                        />
                    </motion.div>

                    <AnimatePresence mode="wait">
                        {isExpanded && (
                            <motion.div
                                className="ml-3"
                                variants={textVariants}
                                initial="collapsed"
                                animate="expanded"
                                exit="collapsed"
                            >
                                <motion.span 
                                    className="text-gray-700 dark:text-white font-semibold text-lg block"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    DckTI
                                </motion.span>
                                <motion.span 
                                    className="text-blue-600 dark:text-blue-400 font-medium text-sm block"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Soluciones Informáticas
                                </motion.span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </Link>
        </div>
    );
};

export default AnimatedLogo;