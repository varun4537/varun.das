'use client';

import { Github, Linkedin, Instagram, BookOpen, ArrowDown } from 'lucide-react';

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

export default function Hero() {
    const scrollToNext = () => {
        const nowSection = document.getElementById('now');
        if (nowSection) {
            nowSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/hero-bg.png)' }}
            />

            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-background-primary/80 via-background-primary/60 to-background-primary" />

            {/* Subtle animated glow */}
            <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-accent-teal/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent-blue/10 rounded-full blur-3xl animate-pulse" />

            <div className="relative z-10 container-custom">
                {/* Main content */}
                <div className="max-w-5xl animate-slide-up">
                    {/* Name */}
                    <h1 className="font-display text-[3.5rem] md:text-[5rem] lg:text-[7rem] font-bold tracking-[-0.03em] leading-none mb-6 text-white drop-shadow-lg">
                        Varun Das
                    </h1>

                    {/* Tagline */}
                    <p className="font-accent text-2xl md:text-3xl lg:text-4xl text-white/90 italic mb-8 drop-shadow-md">
                        Curious wanderer. Building things. Asking questions.
                    </p>

                    {/* Intro */}
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-12 leading-relaxed drop-shadow-sm">
                        I spend my days navigating e-commerce strategies and my nights exploring
                        the cosmos through a lens. Welcome to my corner of the internet, where
                        curiosity meets creation.
                    </p>

                    {/* Social links */}
                    <div className="flex flex-wrap gap-4">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 hover:border-accent-teal rounded-lg transition-all duration-300 hover:shadow-glow shadow-lg"
                                aria-label={link.name}
                            >
                                <link.icon className="w-5 h-5 text-white group-hover:text-accent-teal transition-colors" />
                                <span className="text-sm font-medium text-white group-hover:text-accent-teal transition-colors">
                                    {link.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={scrollToNext}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-tertiary hover:text-accent-teal transition-colors cursor-pointer group"
                aria-label="Scroll to next section"
            >
                <span className="text-xs uppercase tracking-widest font-mono">Explore</span>
                <ArrowDown className="w-5 h-5 animate-bounce group-hover:animate-none" />
            </button>
        </section>
    );
}
