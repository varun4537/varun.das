'use client';

import { Sparkles, Clock, ExternalLink } from 'lucide-react';
import nowContent from '@/../content/now.json';

// Content is loaded from content/now.json - edit that file to update this section

export default function Now() {
    return (
        <section id="now" className="relative overflow-hidden min-h-screen w-full flex items-center py-20 md:py-32 bg-[#0a0a0a]">
            {/* Background image - full bleed */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/now-bg.png)' }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-background-primary/80" />

            <div className="container-custom relative z-10 px-6 md:px-12 lg:px-20">
                <div className="max-w-3xl mx-auto">
                    {/* Section header */}
                    <div className="mb-10 text-center">
                        <span className="font-mono text-xs uppercase tracking-widest text-accent-amber mb-2 block">
                            Living Document
                        </span>
                        <h2 className="font-display text-[3.1rem] md:text-[4.4rem] lg:text-[5.6rem] font-bold mb-6 text-white drop-shadow-lg tracking-[-0.02em] leading-none">
                            What I&apos;m Up To
                        </h2>
                        <p className="text-white/70 text-lg">
                            A snapshot of my current focus, updated regularly.
                        </p>
                    </div>

                    {/* Content card */}
                    <div className="glass rounded-2xl p-8 md:p-10 shadow-floating">
                        {/* Last updated */}
                        <div className="flex items-center gap-2 text-text-tertiary mb-8">
                            <Clock className="w-4 h-4" />
                            <span className="font-mono text-sm">
                                Last updated: {nowContent.lastUpdated}
                            </span>
                        </div>

                        {/* Building */}
                        <div className="mb-8">
                            <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-accent-teal" />
                                Building
                            </h3>
                            <div className="space-y-4">
                                {nowContent.building.map((item) => (
                                    <a
                                        key={item.title}
                                        href={item.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 bg-background-tertiary/50 rounded-lg border border-border-subtle hover:border-accent-teal/50 transition-all duration-300 group"
                                    >
                                        <div className="flex items-start justify-between">
                                            <h4 className="font-semibold text-text-primary mb-1 group-hover:text-accent-teal transition-colors">
                                                {item.title}
                                            </h4>
                                            <ExternalLink className="w-4 h-4 text-text-tertiary group-hover:text-accent-teal transition-colors" />
                                        </div>
                                        <p className="text-text-secondary text-sm">
                                            {item.description}
                                        </p>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Learning */}
                        <div className="mb-8">
                            <h3 className="font-display text-xl font-semibold mb-4">
                                📚 Learning
                            </h3>
                            <ul className="space-y-2">
                                {nowContent.learning.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 text-text-secondary"
                                    >
                                        <span className="text-accent-teal mt-1">→</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
