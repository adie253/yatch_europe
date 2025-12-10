import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { addBooking } from '../utils/storage';

const FleetModal = ({ yacht, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        guests: 1
    });
    const [submitted, setSubmitted] = useState(false);

    if (!yacht) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        addBooking({
            yachtId: yacht.id,
            yachtName: yacht.name,
            ...formData
        });
        setSubmitted(true);
        setTimeout(() => {
            onClose();
            setSubmitted(false);
            setFormData({ name: '', email: '', date: '', guests: 1 });
        }, 2000);
    };

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                ></div>

                <motion.div
                    className="relative bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row max-h-[90vh]"
                    initial={{ scale: 0.95, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.95, y: 20 }}
                >
                    <button
                        className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/30 text-white transition-colors"
                        onClick={onClose}
                    >
                        ✕
                    </button>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                        <img
                            src={yacht.image}
                            alt={yacht.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                            <div>
                                <h2 className="text-3xl font-heading text-white mb-1">{yacht.name}</h2>
                                <p className="text-accent-gold font-medium text-lg">${yacht.price} / hour</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                        {!submitted ? (
                            <>
                                <div className="mb-8">
                                    <h3 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-4">Specifications</h3>
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="bg-gray-50 p-3 rounded">
                                            <span className="block text-xs text-gray-500 uppercase">Length</span>
                                            <span className="font-semibold text-deep-blue">{yacht.length}</span>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded">
                                            <span className="block text-xs text-gray-500 uppercase">Speed</span>
                                            <span className="font-semibold text-deep-blue">{yacht.specs?.speed || 'N/A'}</span>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded">
                                            <span className="block text-xs text-gray-500 uppercase">Guests</span>
                                            <span className="font-semibold text-deep-blue">Up to {yacht.guests}</span>
                                        </div>
                                        <div className="bg-gray-50 p-3 rounded">
                                            <span className="block text-xs text-gray-500 uppercase">Crew</span>
                                            <span className="font-semibold text-deep-blue">{yacht.specs?.crew || 'N/A'}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-2">Description</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {yacht.description || "Experience luxury on the open water."}
                                    </p>

                                    <h3 className="text-sm uppercase tracking-widest text-gray-400 font-bold mb-2">Features</h3>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {yacht.features?.map((feature, idx) => (
                                            <span key={idx} className="px-2 py-1 bg-blue-50 text-deep-blue text-xs rounded-full">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t border-gray-100 pt-6">
                                    <h3 className="text-xl font-heading text-deep-blue mb-4">Book This Yacht</h3>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs text-gray-500 uppercase mb-1">Date</label>
                                                <input
                                                    type="date"
                                                    required
                                                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-deep-blue"
                                                    value={formData.date}
                                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs text-gray-500 uppercase mb-1">Guests</label>
                                                <input
                                                    type="number"
                                                    min="1"
                                                    max={yacht.guests}
                                                    required
                                                    className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-deep-blue"
                                                    value={formData.guests}
                                                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs text-gray-500 uppercase mb-1">Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="John Doe"
                                                className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-deep-blue"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs text-gray-500 uppercase mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-2 border border-gray-200 rounded focus:outline-none focus:border-deep-blue"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-accent-gold text-deep-blue font-bold uppercase tracking-wider hover:bg-yellow-500 transition-colors rounded"
                                        >
                                            Confirm Booking Request
                                        </button>
                                    </form>
                                </div>
                            </>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-center">
                                <div className="text-5xl mb-4">🎉</div>
                                <h3 className="text-2xl font-heading text-deep-blue mb-2">Request Sent!</h3>
                                <p className="text-gray-600">
                                    Thank you, {formData.name}.<br />
                                    We have received your booking request for {yacht.name}.<br />
                                    Our concierge will contact you at {formData.email} shortly.
                                </p>
                            </div>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FleetModal;
