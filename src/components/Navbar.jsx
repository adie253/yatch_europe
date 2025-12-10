import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();

    const isHome = location.pathname === '/';

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Services', path: '/services' },
        { title: 'Contact', path: '#contact', isHash: true },
    ];

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || !isHome || isOpen ? 'bg-white/95 shadow-md py-4 text-deep-blue' : 'bg-transparent py-6 text-white'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-6 md:px-16 lg:px-24 flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold font-heading tracking-wider z-50 relative" onClick={() => setIsOpen(false)}>
                        EUROPEAN YACHTS
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                {link.isHash ? (
                                    <a
                                        href={link.path}
                                        className="font-medium hover:text-accent-gold transition-colors relative group"
                                    >
                                        {link.title}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold transition-all group-hover:w-full"></span>
                                    </a>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className="font-medium hover:text-accent-gold transition-colors relative group"
                                    >
                                        {link.title}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-gold transition-all group-hover:w-full"></span>
                                    </Link>
                                )}
                            </li>
                        ))}
                        <li>
                            <a
                                href="#fleet"
                                className={`px-8 py-3 uppercase text-sm tracking-widest font-semibold border transition-all duration-300 ${scrolled || !isHome
                                    ? 'bg-deep-blue text-white border-deep-blue hover:bg-transparent hover:text-deep-blue'
                                    : 'bg-white text-deep-blue border-white hover:bg-transparent hover:text-white'
                                    }`}
                            >
                                Book Now
                            </a>
                        </li>
                    </ul>

                    {/* Mobile Hamburger Icon */}
                    <div className="md:hidden z-50">
                        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
                            {isOpen ? (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-deep-blue z-40 flex flex-col items-center justify-center space-y-8"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    >
                        {navLinks.map((link) => (
                            <motion.div
                                key={link.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                {link.isHash ? (
                                    <a
                                        href={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-white text-3xl font-heading hover:text-accent-gold transition-colors"
                                    >
                                        {link.title}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-white text-3xl font-heading hover:text-accent-gold transition-colors"
                                    >
                                        {link.title}
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <a
                                href="#book"
                                onClick={() => setIsOpen(false)}
                                className="px-8 py-3 uppercase text-sm tracking-widest font-semibold border border-white text-white hover:bg-white hover:text-deep-blue transition-all"
                            >
                                Book Now
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
