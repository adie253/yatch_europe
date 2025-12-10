import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/siteContent.json';

const About = () => {
    const { hero, experience, values } = data.about;

    return (
        <div className="pt-20 bg-white relative overflow-hidden">
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
                <div className="container mx-auto px-6 md:px-16 lg:px-24 grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={experience.image}
                            alt="Luxury Interior"
                            className="rounded-lg shadow-2xl"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h5 className="text-accent-gold uppercase tracking-widest mb-2 text-sm font-semibold">{experience.subtitle}</h5>
                        <h2 className="text-3xl md:text-4xl font-heading text-deep-blue mb-6">{experience.title}</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {experience.description1}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            {experience.description2}
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="relative z-10 py-20 bg-gray-50">
                <div className="container mx-auto px-6 md:px-16 lg:px-24 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading text-deep-blue mb-12">{values.title}</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.items.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                            >
                                <h3 className="text-xl font-heading text-deep-blue mb-4">{item.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
