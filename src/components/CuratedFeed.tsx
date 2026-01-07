'use client';

import { Link2, Video, Wrench, Calendar, LucideIcon } from 'lucide-react';
import curatedContent from '@/../content/curated.json';

// Icon mapping for recommendation types
const iconMap: Record<string, LucideIcon> = {
    article: Link2,
    video: Video,
    tool: Wrench,
};

// Content loaded from content/curated.json

export default function CuratedFeed() {
    return (
        <section id="curated" className="relative overflow-hidden min-h-screen w-full flex items-center py-20 md:py-32">
            {/* Background image - full bleed */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/curated-bg.png)' }}
            />
            <div className="absolute inset-0 bg-background-primary/75" />

            <div className="container-custom relative z-10 px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl mx-auto">
                    {/* Section header */}
                    <div className="mb-12 text-center">
                        <span className="font-mono text-xs uppercase tracking-widest text-accent-coral mb-2 block">
                            Weekly Picks
                        </span>
                        <h2 className="font-display text-[3.1rem] md:text-[4.4rem] lg:text-[5.6rem] font-bold mb-6 text-white drop-shadow-lg tracking-[-0.02em] leading-none">
                            Things I&apos;m Finding Interesting
                        </h2>
                        <div className="flex items-center justify-center gap-2 text-white/60">
                            <Calendar className="w-4 h-4" />
                            <span className="font-mono text-sm">Week of {curatedContent.weekOf}</span>
                        </div>
                    </div>

                    {/* Recommendations */}
                    <div className="space-y-6">
                        {curatedContent.items.map((item, index) => {
                            const IconComponent = iconMap[item.type] || Link2;
                            return (
                                <article
                                    key={index}
                                    className="glass rounded-xl p-6 md:p-8 group shadow-floating hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-4 md:gap-6">
                                        {/* Icon */}
                                        <div className="flex-shrink-0 p-3 bg-background-tertiary/50 rounded-lg border border-white/10 group-hover:border-accent-teal/30 transition-colors">
                                            <IconComponent className="w-6 h-6 text-accent-teal" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow">
                                            {/* Type badge */}
                                            <span className="tag text-xs mb-2">
                                                {item.type}
                                            </span>

                                            {/* Title */}
                                            <h3 className="font-display text-xl font-semibold mb-1 group-hover:text-accent-teal transition-colors">
                                                <a
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:underline"
                                                >
                                                    {item.title}
                                                </a>
                                            </h3>

                                            {/* Commentary */}
                                            <p className="text-text-secondary italic font-accent">
                                                &quot;{item.commentary}&quot;
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>

                    {/* Coming soon note */}
                    <div className="mt-12 text-center">
                        <p className="text-text-tertiary text-sm">
                            Check back weekly for new recommendations.
                            <span className="text-accent-teal ml-1">Subscribe coming soon.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
