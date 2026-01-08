'use client';

import { MapPin, Coffee } from 'lucide-react';
import aboutFacts from '@/../content/about-facts.json';

// Quick facts loaded from content/about-facts.json

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden min-h-screen w-full flex items-center py-20 md:py-32">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/about-bg.png)' }}
            />
            <div className="absolute inset-0 bg-background-primary/85" />

            <div className="container-custom relative z-10 px-6 md:px-12 lg:px-20">
                <div className="max-w-4xl mx-auto">
                    {/* Section header */}
                    <div className="mb-12 text-center">
                        <span className="font-mono text-xs uppercase tracking-widest text-accent-teal mb-2 block">
                            The Longer Story
                        </span>
                        <h2 className="font-display text-[3.1rem] md:text-[4.4rem] lg:text-[5.6rem] font-bold mb-6 text-white drop-shadow-lg tracking-[-0.02em] leading-none">
                            About Me
                        </h2>
                    </div>

                    {/* Content */}
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Main content */}
                        <div className="md:col-span-2 space-y-6">
                            <p className="text-lg text-white/90 leading-relaxed">
                                I am Varun. For the past ten years, I have built partnerships and scaled
                                businesses across continents. I now run an e-commerce consulting practice.
                            </p>

                            <p className="text-lg text-white/70 leading-relaxed">
                                But that is just the LinkedIn version.
                            </p>

                            <p className="text-lg text-white/90 leading-relaxed">
                                On weekends, I build things: tools to{' '}
                                <a
                                    href="https://india-budget-explorer.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent-teal hover:underline"
                                >
                                    explore government budgets
                                </a>
                                , apps to organize movie recommendations, Chrome extensions for mindful
                                productivity. I love photography and always try to find sublime in the
                                mundane. I read whenever I get time. Mostly fiction, but occasionally
                                non-fiction too! And in winters, you will find me under starry skies in
                                Coorg, where I gaze upon the wonders of the night sky.
                            </p>

                            <div className="border-l-4 border-accent-teal pl-6 py-2 my-8">
                                <p className="font-accent text-xl italic text-white">
                                    &quot;This space is where I share what I am learning and building.
                                    It is less of a portfolio, more of a digital garden. Hopefully,
                                    it will be messy, alive, and growing.&quot;
                                </p>
                            </div>

                            <p className="text-lg text-white/90 leading-relaxed">
                                Curious about e-commerce or vibe coding? Want to swap book recommendations?
                                Discuss why we aren&apos;t really star dust, but perhaps we are?{' '}
                                <a
                                    href="#contact"
                                    className="text-accent-teal hover:underline font-medium"
                                >
                                    Just say hi
                                </a>
                                .
                            </p>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Quick facts card */}
                            <div className="glass rounded-xl p-6 shadow-floating">
                                <h3 className="font-display text-lg font-semibold mb-4 text-white">
                                    Quick Facts
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-white font-medium">Based in</p>
                                            <p className="text-white/70 text-sm">{aboutFacts.location}</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Coffee className="w-5 h-5 text-accent-amber flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-white font-medium">Current Role</p>
                                            <p className="text-white/70 text-sm">
                                                {aboutFacts.roleLink ? (
                                                    <a
                                                        href={aboutFacts.roleLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-accent-teal transition-colors"
                                                    >
                                                        {aboutFacts.role}
                                                    </a>
                                                ) : (
                                                    aboutFacts.role
                                                )}
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
