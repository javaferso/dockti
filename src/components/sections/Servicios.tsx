// components/sections/Servicios.tsx
import { motion } from 'framer-motion';
import React from 'react';
import { 
    CodeBracketIcon, 
    ServerIcon, 
    CpuChipIcon,
    CloudArrowUpIcon,
    ShieldCheckIcon,
    CogIcon
} from '@heroicons/react/24/outline';

const servicios = [
    {
        icon: <CodeBracketIcon className="h-12 w-12" />,
        title: "Desarrollo de Software",
        description: "Desarrollo de aplicaciones web y móviles personalizadas con las últimas tecnologías.",
        features: [
            "Aplicaciones Web Responsivas",
            "Desarrollo Frontend y Backend",
            "APIs RESTful",
            "Integraciones de Pago"
        ]
    },
    {
        icon: <ServerIcon className="h-12 w-12" />,
        title: "Soporte TI",
        description: "Servicios de soporte técnico y mantenimiento para mantener tu infraestructura funcionando.",
        features: [
            "Soporte Nivel 1, 2 y 3",
            "Mantenimiento Preventivo",
            "Resolución de Problemas",
            "Monitoreo 24/7"
        ]
    },
    {
        icon: <CpuChipIcon className="h-12 w-12" />,
        title: "Infraestructura",
        description: "Diseño e implementación de infraestructura tecnológica escalable y segura.",
        features: [
            "Servidores y Redes",
            "Virtualización",
            "Almacenamiento",
            "Backup y Recuperación"
        ]
    },
    {
        icon: <CloudArrowUpIcon className="h-12 w-12" />,
        title: "Cloud Computing",
        description: "Servicios en la nube para optimizar tus operaciones y reducir costos.",
        features: [
            "AWS y Azure",
            "Migración a la Nube",
            "Optimización de Costos",
            "Arquitectura Cloud"
        ]
    },
    {
        icon: <ShieldCheckIcon className="h-12 w-12" />,
        title: "Ciberseguridad",
        description: "Protección integral para tus activos digitales y datos sensibles.",
        features: [
            "Auditorías de Seguridad",
            "Implementación de Políticas",
            "Gestión de Accesos",
            "Monitoreo de Seguridad"
        ]
    },
    {
        icon: <CogIcon className="h-12 w-12" />,
        title: "Automatización",
        description: "Optimización de procesos mediante automatización inteligente.",
        features: [
            "Workflow Automation",
            "Integración de Sistemas",
            "RPA",
            "Business Intelligence"
        ]
    }
];

const Servicios: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <motion.section 
        id="services"
        className="py-20 bg-gray-50 dark:bg-gray-900"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2 
                        className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Nuestros Servicios
                    </motion.h2>
                    <motion.p 
                        className="text-xl text-gray-600 dark:text-gray-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Soluciones tecnológicas integrales para tu negocio
                    </motion.p>
                </div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {servicios.map((servicio, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="flex items-center justify-center mb-6">
                                <div className="text-blue-600 dark:text-blue-400">
                                    {servicio.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-4">
                                {servicio.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                                {servicio.description}
                            </p>
                            <ul className="space-y-3">
                                {servicio.features.map((feature, idx) => (
                                    <li 
                                        key={idx}
                                        className="flex items-center text-gray-700 dark:text-gray-300"
                                    >
                                        <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Servicios;