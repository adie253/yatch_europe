import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/siteContent.json';

const Services = () => {
    const { hero, items } = data.services;

    return (
        <div className="pt-20 bg-white relative">
            {/* Background Dots Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#0A2342 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <section className="relative z-10 py-20 bg-deep-blue text-white text-center">
                <div className="container mx-auto px-6 md:px-16 lg:px-24">
                    <motion.h1
                        className="text-4xl md:text-6xl font-heading mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {hero.title}
                    </motion.h1>
                    <motion.p
                        className="max-w-2xl mx-auto text-lg text-warm-sand font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {hero.subtitle}
                    </motion.p>
                </div>
            </section>

            <section className="relative z-10 py-20">
                <div className="container mx-auto px-6 md:px-16 lg:px-24">
                    <div className="grid md:grid-cols-2 gap-12">
                        {items.map((service, index) => (
                            <motion.div
                                key={service.title}
                                className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-300"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <div className="p-6">
                                    <div className="text-4xl mb-4">{service.icon}</div>
                                    <h3 className="text-2xl font-heading text-deep-blue mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-light">{service.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
