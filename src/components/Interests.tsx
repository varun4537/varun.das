'use client';

import { Code2, Camera, Telescope, ShoppingCart } from 'lucide-react';

const interests = [
    {
        title: 'Vibe Coding',
        description: 'Building tools that feel good to use. Exploring AI-assisted development and turning ideas into working prototypes.',
        icon: Code2,
        color: 'from-blue-500/20 to-purple-500/20',
        borderColor: 'hover:border-blue-500/50',
    },
    {
        title: 'Astronomy',
        description: 'Gazing at the night sky, wondering about our place in the cosmos. The universe has a way of putting things in perspective.',
        icon: Telescope,
        color: 'from-indigo-500/20 to-cyan-500/20',
        borderColor: 'hover:border-indigo-500/50',
    },
    {
        title: 'Photography',
        description: 'Capturing everyday moments through a lens. Finding beauty in the ordinary and stories in the mundane.',
        icon: Camera,
        color: 'from-amber-500/20 to-orange-500/20',
        borderColor: 'hover:border-amber-500/50',
    },
    {
        title: 'E-commerce',
        description: 'A decade of building partnerships and scaling businesses across continents. From $30M P&L at Flipkart to founding my own consultancy.',
        icon: ShoppingCart,
        color: 'from-teal-500/20 to-green-500/20',
        borderColor: 'hover:border-teal-500/50',
    },
];

export default function Interests() {
    return (
        <section id="interests" className="section relative overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                style={{ backgroundImage: 'url(/interests-bg.png)' }}
            />
            <div className="absolute inset-0 bg-background-secondary/85" />

            <div className="container-custom relative z-10">
                {/* Section header */}
                <div className="mb-16 text-center">
                    <span className="font-mono text-sm uppercase tracking-widest text-accent-amber mb-4 block">
                        Areas of Focus
                    </span>
                    <h2 className="font-display text-[3.1rem] md:text-[4.4rem] lg:text-[5.6rem] font-bold mb-6 text-white drop-shadow-lg tracking-[-0.02em] leading-none">
                        What Interests Me
                    </h2>
                    <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
                        The threads that connect my curiosities. Some for work, some for wonder,
                        all feeding into how I see the world.
                    </p>
                </div>

                {/* Interests grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {interests.map((interest, index) => (
                        <article
                            key={interest.title}
                            className={`group relative overflow-hidden rounded-xl glass p-8 transition-all duration-300 hover:-translate-y-2 shadow-floating hover:shadow-glow ${interest.borderColor}`}
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Background gradient */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="mb-6 inline-flex p-4 rounded-xl bg-background-tertiary border border-border-subtle group-hover:border-accent-teal/30 transition-colors">
                                    <interest.icon className="w-8 h-8 text-accent-teal" />
                                </div>

                                {/* Title */}
                                <h3 className="font-display text-2xl font-semibold mb-3">
                                    {interest.title}
                                </h3>

                                {/* Description */}
                                <p className="text-text-secondary leading-relaxed">
                                    {interest.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
