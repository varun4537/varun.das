'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Now', href: '#now' },
    { name: 'Reads', href: '#curated' },
    { name: 'Blog', href: '#blog' },
    { name: 'About', href: '#about' },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMobileMenuOpen]);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-background-primary/95 backdrop-blur-xl shadow-lg'
                    : 'bg-background-primary/30 backdrop-blur-sm'
                    }`}
            >
                <nav className="container-custom px-6 md:px-12 lg:px-20">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <a
                            href="#"
                            className="font-display text-xl font-bold text-white hover:text-accent-teal transition-colors"
                        >
                            VD
                        </a>

                        {/* Desktop navigation */}
                        <ul className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm font-medium text-white/80 hover:text-accent-teal transition-colors relative group"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-teal transition-all duration-300 group-hover:w-full" />
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <a
                            href="#contact"
                            className="hidden md:inline-flex px-5 py-2.5 bg-accent-teal hover:bg-accent-teal-600 text-background-primary text-sm font-medium rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-glow"
                        >
                            Get in Touch
                        </a>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-white hover:text-accent-teal transition-colors"
                            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile menu - fullscreen glassmorphic overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed inset-0 z-[60] bg-background-primary/95 backdrop-blur-xl">
                    {/* Header strip to match navbar */}
                    <div className="h-20 flex items-center justify-between px-6">
                        <span className="font-display text-xl font-bold text-white">VD</span>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-white hover:text-accent-teal transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Menu content */}
                    <nav className="px-6 py-8">
                        <ul className="space-y-6">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        className="block text-2xl font-display font-semibold text-white hover:text-accent-teal transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 pt-8 border-t border-white/10">
                            <a
                                href="#contact"
                                onClick={handleLinkClick}
                                className="inline-flex w-full justify-center px-6 py-4 bg-accent-teal hover:bg-accent-teal-600 text-background-primary font-medium rounded-lg transition-all"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </nav>
                </div>
            )}
        </>
    );
}
