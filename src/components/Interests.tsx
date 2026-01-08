'use client';

import { Code2, Camera, Telescope, ShoppingCart, Rocket, Brain, Lightbulb, Landmark, BookOpen, LucideIcon } from 'lucide-react';
import interestsContent from '@/../content/interests.json';

// Icon mapping - add new icons here as needed
const iconMap: Record<string, LucideIcon> = {
    Code2, Camera, Telescope, ShoppingCart, Rocket, Brain, Lightbulb, Landmark, BookOpen
};

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
                <div className="mb-12 text-center">
                    <span className="font-mono text-sm uppercase tracking-widest text-accent-amber mb-4 block">
                        Areas of Focus
                    </span>
                    <h2 className="font-display text-[3.1rem] md:text-[4.4rem] lg:text-[5.6rem] font-bold mb-6 text-white drop-shadow-lg tracking-[-0.02em] leading-none">
                        What Interests Me
                    </h2>
                    <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
                        The threads that connect my curiosities.
                    </p>
                </div>

                {/* Interests grid - compact floating tiles */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {interestsContent.interests.map((interest, index) => {
                        const IconComponent = iconMap[interest.icon] || Code2;
                        return (
                            <article
                                key={interest.id}
                                className="group relative overflow-hidden rounded-xl bg-background-tertiary/95 backdrop-blur-sm p-5 transition-all duration-300 hover:-translate-y-2 border border-border-subtle hover:border-accent-teal/50"
                                style={{
                                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.3)',
                                    animationDelay: `${index * 50}ms`,
                                }}
                            >
                                {/* Icon + Title inline */}
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 rounded-lg bg-background-elevated border border-border-subtle group-hover:border-accent-teal/30 transition-colors">
                                        <IconComponent className="w-5 h-5 text-accent-teal" />
                                    </div>
                                    <h3 className="font-display text-lg font-semibold text-white">
                                        {interest.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    {interest.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
