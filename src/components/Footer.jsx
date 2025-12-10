import React from 'react';
import data from '../data/siteContent.json';

const Footer = () => {
    const { title, description, quickLinks, contact, copyright } = data.footer;

    return (
        <footer id="contact" className="bg-deep-blue text-white py-16">
            <div className="container mx-auto px-6 md:px-16 lg:px-24">
                <div className="flex flex-wrap justify-between gap-10">
                    <div className="flex-1 min-w-[300px]">
                        <h3 className="text-2xl font-heading mb-6 tracking-wide">{title}</h3>
                        <p className="text-gray-400 leading-relaxed font-light">
                            {description}
                        </p>
                    </div>

                    <div className="flex-1 min-w-[200px]">
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="text-gray-400 space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}><a href={link.href} className="hover:text-accent-gold transition-colors">{link.text}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex-1 min-w-[300px]">
                        <h4 className="text-lg font-semibold mb-6">{contact.title}</h4>
                        <div className="text-gray-400 space-y-3">
                            <p>{contact.email}</p>
                            <p>{contact.phone}</p>
                            <p>{contact.address}</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} {copyright}. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
