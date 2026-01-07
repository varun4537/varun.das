'use client';

import { Code2, Camera, Telescope, ShoppingCart, Sparkles, Stars, ShoppingBag, LucideIcon } from 'lucide-react';
import interestsContent from '@/../content/interests.json';

// Icon mapping - add new icons here as needed
const iconMap: Record<string, LucideIcon> = {
    Code2, Camera, Telescope, ShoppingCart, Sparkles, Stars, ShoppingBag
};

// Color presets for interests
const colorPresets = [
    { color: 'from-blue-500/20 to-purple-500/20', borderColor: 'hover:border-blue-500/50' },
    { color: 'from-indigo-500/20 to-cyan-500/20', borderColor: 'hover:border-indigo-500/50' },
    { color: 'from-amber-500/20 to-orange-500/20', borderColor: 'hover:border-amber-500/50' },
    { color: 'from-teal-500/20 to-green-500/20', borderColor: 'hover:border-teal-500/50' },
];

// Content loaded from content/interests.json

export default function Interests() {
    return (
        <section id="interests" className="relative overflow-hidden min-h-screen w-full flex items-center py-20 md:py-32">
            {/* Background image - full bleed */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/interests-bg.png)' }}
            />
            <div className="absolute inset-0 bg-background-primary/70" />

            <div className="container-custom relative z-10 px-6 md:px-12 lg:px-20">
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
                    {interestsContent.interests.map((interest, index) => {
                        const IconComponent = iconMap[interest.icon] || Code2;
                        const colors = colorPresets[index % colorPresets.length];
                        return (
                            <article
                                key={interest.id}
                                className={`group relative overflow-hidden rounded-xl glass p-8 transition-all duration-300 hover:-translate-y-2 shadow-floating hover:shadow-glow ${colors.borderColor}`}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                {/* Background gradient */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${colors.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="mb-6 inline-flex p-4 rounded-xl bg-background-tertiary border border-border-subtle group-hover:border-accent-teal/30 transition-colors">
                                        <IconComponent className="w-8 h-8 text-accent-teal" />
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
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
