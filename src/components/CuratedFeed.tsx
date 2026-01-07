'use client';

import { Link2, Video, Wrench, Calendar } from 'lucide-react';

// Placeholder recommendations - in production, this would be loaded from markdown
const recommendations = {
    date: 'Week of January 6, 2026',
    items: [
        {
            type: 'article',
            title: 'The Rise of Vibe Coding',
            source: 'TechCrunch',
            url: '#',
            commentary: 'This piece captures exactly what I\'ve been experiencing - coding is becoming more intuitive, more about expressing intent than syntax.',
            icon: Link2,
        },
        {
            type: 'video',
            title: 'How to Think Like an Astronomer',
            source: 'YouTube',
            url: '#',
            commentary: 'A beautiful reminder of why I fell in love with the night sky. Perspective is everything.',
            icon: Video,
        },
        {
            type: 'tool',
            title: 'Cursor IDE',
            source: 'Tool',
            url: 'https://cursor.sh',
            commentary: 'The future of coding is here. AI-first development that actually feels natural.',
            icon: Wrench,
        },
    ],
};

export default function CuratedFeed() {
    return (
        <section id="curated" className="section relative overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
                style={{ backgroundImage: 'url(/curated-bg.png)' }}
            />
            <div className="absolute inset-0 bg-background-secondary/85" />

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Section header */}
                    <div className="mb-12">
                        <span className="font-mono text-xs uppercase tracking-widest text-accent-coral mb-2 block">
                            Weekly Picks
                        </span>
                        <h2 className="font-display text-[3.1rem] md:text-[4.4rem] lg:text-[5.6rem] font-bold mb-6 text-white drop-shadow-lg tracking-[-0.02em] leading-none">
                            Things I&apos;m Finding Interesting
                        </h2>
                        <div className="flex items-center gap-2 text-text-tertiary">
                            <Calendar className="w-4 h-4" />
                            <span className="font-mono text-sm">{recommendations.date}</span>
                        </div>
                    </div>

                    {/* Recommendations */}
                    <div className="space-y-6">
                        {recommendations.items.map((item, index) => (
                            <article
                                key={index}
                                className="glass rounded-xl p-6 md:p-8 group shadow-floating hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-start gap-4 md:gap-6">
                                    {/* Icon */}
                                    <div className="flex-shrink-0 p-3 bg-background-tertiary/50 rounded-lg border border-white/10 group-hover:border-accent-teal/30 transition-colors">
                                        <item.icon className="w-6 h-6 text-accent-teal" />
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

                                        {/* Source */}
                                        <p className="text-text-tertiary text-sm mb-3">
                                            via {item.source}
                                        </p>

                                        {/* Commentary */}
                                        <p className="text-text-secondary italic font-accent">
                                            &quot;{item.commentary}&quot;
                                        </p>
                                    </div>
                                </div>
                            </article>
                        ))}
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
