import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/siteContent.json';

const Hero = () => {
    const { intro, title, subtitle, description, buttonText, bgImage } = data.hero;

    return (
        <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url("${bgImage}")`
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 max-w-5xl px-6 md:px-16 lg:px-24">
                <motion.h5
                    className="uppercase tracking-[0.2em] mb-4 text-warm-sand font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {intro}
                </motion.h5>

                <motion.h1
                    className="text-4xl md:text-6xl lg:text-7xl mb-6 font-heading leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {title} <br />
                    <span className="text-3xl md:text-5xl block mt-4 italic font-light opacity-90">{subtitle}</span>
                </motion.h1>

                <motion.div
                    className="text-xl md:text-2xl mb-12 font-light tracking-wide opacity-90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {description}
                </motion.div>

                <motion.a
                    href="#fleet"
                    className="inline-block px-10 py-4 bg-warm-sand text-deep-blue font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {buttonText}
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;
