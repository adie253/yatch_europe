import React from 'react';
import { motion } from 'framer-motion';
import data from '../data/siteContent.json';

const Reviews = () => {
    const { title, subtitle, items } = data.reviews;

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 md:px-16 lg:px-24">
                <div className="text-center mb-16">
                    <h5 className="text-accent-gold uppercase tracking-widest mb-2 text-sm font-semibold">{subtitle}</h5>
                    <h2 className="text-4xl md:text-5xl font-heading text-deep-blue mb-4">{title}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((review, index) => (
                        <motion.div
                            key={review.id}
                            className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 relative"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="text-accent-gold text-4xl font-serif absolute top-6 left-6 opacity-20">"</div>
                            <p className="text-gray-600 italic mb-6 relative z-10 pt-4 px-2">
                                {review.text}
                            </p>
                            <div className="flex items-center">
                                {/* <img 
                                    src={review.image} 
                                    alt={review.name} 
                                    className="w-10 h-10 rounded-full object-cover mr-4 grayscale opacity-70"
                                /> */}
                                <div className="w-10 h-10 rounded-full bg-deep-blue text-white flex items-center justify-center font-bold mr-4 text-sm">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-heading text-deep-blue text-sm">{review.name}</h4>
                                    <span className="text-xs text-gray-500 uppercase tracking-wider">{review.location}</span>
                                </div>
                            </div>
                            <div className="flex text-yellow-400 text-xs mt-3 ml-14">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
