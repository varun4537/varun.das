'use client';

import { Github, Linkedin, Instagram, BookOpen, Mail, Heart } from 'lucide-react';

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/varun4537',
        icon: Github,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/vdas',
        icon: Linkedin,
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/varun_clicks_everyday/',
        icon: Instagram,
    },
    {
        name: 'Blog',
        href: 'https://betweenbeginningsblog.wordpress.com/',
        icon: BookOpen,
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border-subtle bg-background-secondary/50">
            <div className="section py-12 md:py-16">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Left side */}
                        <div>
                            <h2 className="font-display text-2xl font-bold mb-4">
                                Let&apos;s Connect
                            </h2>
                            <p className="text-text-secondary mb-6 max-w-md">
                                Got a question, collaboration idea, or just want to say hi?
                                I&apos;d love to hear from you.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-teal hover:bg-accent-teal-600 text-background-primary rounded-lg font-medium transition-all hover:-translate-y-1 hover:shadow-glow"
                            >
                                <Mail className="w-5 h-5" aria-hidden="true" />
                                Get in Touch
                            </a>
                        </div>

                        {/* Right side */}
                        <div className="md:text-right">
                            <h3 className="font-semibold mb-4 text-text-primary">
                                Find Me Online
                            </h3>
                            <div className="flex flex-wrap gap-3 md:justify-end">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-surface/50 hover:bg-surface border border-border-subtle hover:border-accent-teal rounded-lg transition-all hover:-translate-y-1"
                                        aria-label={link.name}
                                    >
                                        <link.icon className="w-5 h-5 text-text-secondary hover:text-accent-teal" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-4 text-text-tertiary text-sm">
                        <p>
                            © {currentYear} Varun Das. All rights reserved.
                        </p>
                        <p className="flex items-center gap-1">
                            Made with <Heart className="w-4 h-4 text-accent-coral fill-accent-coral" aria-hidden="true" /> and curiosity
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
