// components/chat/Chatbot.tsx
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoPaperPlaneOutline } from 'react-icons/io5';
import { RiRobot2Line } from 'react-icons/ri';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<null | HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: userMessage }),
            });

            const data = await response.json();
            setMessages(prev => [...prev, { role: 'assistant', content: data.response }]);
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, { 
                role: 'assistant', 
                content: 'Lo siento, hubo un error. Por favor, intenta de nuevo más tarde.' 
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Botón del chatbot */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-24 right-6 z-40"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="relative flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
                        <RiRobot2Line className="w-8 h-8 text-white" />
                    </div>
                </div>
            </motion.button>

            {/* Ventana del chat */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-800 rounded-2xl shadow-xl z-50"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                            <div className="flex items-center space-x-2">
                                <RiRobot2Line className="w-6 h-6 text-blue-500" />
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Asistente Virtual
                                </h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <IoClose className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="h-96 overflow-y-auto p-4 space-y-4">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg ${
                                            message.role === 'user'
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                                        }`}
                                    >
                                        {message.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg">
                                        <div className="flex space-x-2">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Escribe tu mensaje..."
                                    className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
                                >
                                    <IoPaperPlaneOutline className="w-5 h-5" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;