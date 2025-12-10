import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/siteContent.json';
import FleetModal from './FleetModal';

const Fleet = () => {
    const { title, subtitle, description, items } = data.fleet;

    const [selectedYacht, setSelectedYacht] = React.useState(null);

    return (
        <section id="fleet" className="py-20 bg-gray-50 bg-opacity-50">
            <FleetModal yacht={selectedYacht} onClose={() => setSelectedYacht(null)} />

            <div className="container mx-auto px-6 md:px-16 lg:px-24">
                <div className="text-center mb-16">
                    <h5 className="text-accent-gold uppercase tracking-widest mb-2 text-sm font-semibold">{subtitle}</h5>
                    <h2 className="text-4xl md:text-5xl font-heading text-deep-blue mb-4">{title}</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 font-light text-lg">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((boat) => (
                        <motion.div
                            key={boat.id}
                            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5 }}
                            onClick={() => setSelectedYacht(boat)}
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={boat.image}
                                    alt={boat.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-deep-blue font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                    Book Now
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-center mb-4 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                    <span>{boat.length}</span>
                                    <span>{boat.guests} Guests</span>
                                </div>
                                <h3 className="text-2xl font-heading text-deep-blue mb-4">{boat.name}</h3>
                                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                                    <div>
                                        <span className="block text-xs text-gray-400 mb-1">Starting from</span>
                                        <span className="text-xl font-bold text-deep-blue">€{boat.price}<span className="text-sm font-normal text-gray-500">/hour</span></span>
                                    </div>
                                    <button className="px-6 py-2 border border-deep-blue text-deep-blue text-sm uppercase tracking-wider font-medium group-hover:bg-deep-blue group-hover:text-white transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Fleet;
