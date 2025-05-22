// components/layout/Navbar.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';
import ThemeToggle from '@/components/ui/ThemeToggle';
import Image from 'next/image';
import AnimatedLogo from '@/components/ui/AnimatedLogo';
import { useState } from 'react';
import { useEffect } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Blog', href: '/blog' },            // Página normal
    { label: 'Contact', href: '/#contacto' },    // Sección en index
  ];
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link href="/">
              <AnimatedLogo />
              {/* <span className="text-2xl font-bold">DockTI</span> */}
            </Link>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(({ label, href }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={href}
                    scroll={true}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:text-blue-600"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;