// components/sections/Contacto.tsx
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Contacto: React.FC = () => {
    const [formState, setFormState] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });

    const inputVariants = {
        focus: {
            scale: 1.02,
            transition: {
                duration: 0.2
            }
        }
    };

    const socialLinks = [
        { icon: <FaLinkedin className="w-6 h-6" />, href: 'https://linkedin.com/in/tu-perfil', label: 'LinkedIn' },
        { icon: <FaGithub className="w-6 h-6" />, href: 'https://github.com/tu-usuario', label: 'GitHub' },
        { icon: <FaTwitter className="w-6 h-6" />, href: 'https://twitter.com/tu-usuario', label: 'Twitter' }
    ];

    return (
        <motion.section
            id="contacto"
            className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="container mx-auto max-w-6xl">
                <motion.div 
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-12 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-12">
                        <motion.h2 
                            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                        >
                            ¿Hablemos?
                        </motion.h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Elige la forma que prefieras para contactarnos
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Formulario de contacto */}
                        <motion.div
                            variants={inputVariants}
                            className="space-y-6"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                Envíanos un mensaje
                            </h3>
                            <form className="space-y-4">
                                <motion.div variants={inputVariants} whileFocus="focus">
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Nombre
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                                        placeholder="Tu nombre"
                                    />
                                </motion.div>

                                <motion.div variants={inputVariants} whileFocus="focus">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out"
                                        placeholder="tu@email.com"
                                    />
                                </motion.div>

                                <motion.div variants={inputVariants} whileFocus="focus">
                                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="mensaje"
                                        name="mensaje"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out resize-none"
                                        placeholder="¿En qué podemos ayudarte?"
                                    />
                                </motion.div>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transform transition-all duration-200 space-x-2"
                                >
                                    <span>Enviar Mensaje</span>
                                    <PaperAirplaneIcon className="h-5 w-5" />
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Información de contacto y redes sociales */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Contacto Directo
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                                            <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                            <p className="text-gray-900 dark:text-white">contacto@tuempresa.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                                            <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Teléfono</p>
                                            <p className="text-gray-900 dark:text-white">+56 9 4946 9213</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                    Síguenos
                                </h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((link, index) => (
                                        <motion.a
                                            key={index}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            {link.icon}
                                            <span className="sr-only">{link.label}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Contacto;