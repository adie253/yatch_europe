import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ItineraryModal = ({ region, onClose }) => {
    if (!region) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                ></div>

                {/* Modal Content */}
                <motion.div
                    className="relative bg-white rounded-lg shadow-2xl overflow-hidden max-w-2xl w-full"
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                >
                    <button
                        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
                        onClick={onClose}
                    >
                        ✕
                    </button>

                    <div className="h-64 relative">
                        <img
                            src={region.image}
                            alt={region.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                            <div>
                                <h2 className="text-4xl font-heading text-white mb-2">{region.name}</h2>
                                <span className="inline-block px-3 py-1 bg-accent-gold text-deep-blue text-xs font-bold uppercase tracking-wider rounded-sm">
                                    {region.duration}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <p className="text-gray-600 leading-relaxed mb-8 text-lg font-light">
                            {region.description}
                        </p>

                        <div>
                            <h4 className="text-deep-blue font-bold uppercase tracking-widest text-sm mb-4">Highlights</h4>
                            <div className="grid grid-cols-2 gap-4">
                                {region.highlights?.map((highlight, index) => (
                                    <div key={index} className="flex items-center text-gray-500">
                                        <span className="text-accent-gold mr-2">✦</span>
                                        {highlight}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                            <button
                                className="px-8 py-3 bg-deep-blue text-white font-medium uppercase tracking-wider text-sm hover:bg-opacity-90 transition-colors"
                                onClick={onClose}
                            >
                                Close Details
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ItineraryModal;
