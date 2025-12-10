import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/siteContent.json';
import ItineraryModal from './ItineraryModal';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const Itineraries = () => {
    const { title, subtitle, description, regions } = data.itineraries;
    const [selectedRegion, setSelectedRegion] = React.useState(null);

    return (
        <section id="itineraries" className="py-20 bg-white relative">
            <ItineraryModal region={selectedRegion} onClose={() => setSelectedRegion(null)} />

            <div className="container mx-auto px-6 md:px-16 lg:px-24">
                <div className="text-center mb-16">
                    <h5 className="text-accent-gold uppercase tracking-widest mb-2 text-sm font-semibold">{subtitle}</h5>
                    <h2 className="text-4xl md:text-5xl font-heading text-deep-blue mb-4">{title}</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 font-light text-lg">
                        {description}
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {regions.map((region) => (
                        <motion.div
                            key={region.name}
                            className="group relative h-[400px] rounded-lg overflow-hidden cursor-pointer shadow-lg"
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedRegion(region)}
                        >
                            <div
                                className="h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${region.image})` }}
                            ></div>
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                                <h3 className="text-2xl font-heading mb-1">{region.name}</h3>
                                <span className="text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 block">
                                    View Itinerary &rarr;
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Itineraries;
