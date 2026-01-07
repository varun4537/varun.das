'use client';

import { MapPin, Coffee, Heart } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="section relative overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ backgroundImage: 'url(/about-bg.png)' }}
            />
            <div className="absolute inset-0 bg-background-primary/90" />

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Section header */}
                    <div className="mb-12">
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
                            <p className="text-lg text-text-secondary leading-relaxed">
                                I&apos;m Varun — a curious explorer who&apos;s spent the last decade building
                                partnerships and scaling businesses across continents. From managing{' '}
                                <span className="text-accent-amber font-medium">$30M P&L at Flipkart</span>{' '}
                                to launching my own e-commerce consulting practice, I&apos;ve worn many hats.
                            </p>

                            <p className="text-lg text-text-secondary leading-relaxed">
                                But the title on LinkedIn only tells half the story.
                            </p>

                            <p className="text-lg text-text-secondary leading-relaxed">
                                I build things on weekends — tools to{' '}
                                <a href="https://india-budget-explorer.vercel.app" target="_blank" rel="noopener noreferrer">
                                    explore government budgets
                                </a>
                                , apps to organize movie recommendations, Chrome extensions for mindful
                                productivity. I photograph the everyday, write when thoughts demand
                                release, and look up at the stars wondering what else is out there.
                            </p>

                            <div className="border-l-4 border-accent-teal pl-6 py-2 my-8">
                                <p className="font-accent text-xl italic text-text-primary">
                                    &quot;This space is where I share what I&apos;m learning, building, and
                                    thinking about. It&apos;s less portfolio, more digital garden —
                                    messy, growing, alive.&quot;
                                </p>
                            </div>

                            <p className="text-lg text-text-secondary leading-relaxed">
                                If you&apos;re curious about e-commerce, vibe coding, or just want to
                                swap book recommendations,{' '}
                                <a
                                    href="mailto:varundas4537@gmail.com"
                                    className="text-accent-teal hover:underline"
                                >
                                    say hi
                                </a>
                                .
                            </p>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Quick facts card */}
                            <div className="glass rounded-xl p-6">
                                <h3 className="font-display text-lg font-semibold mb-4">
                                    Quick Facts
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <MapPin className="w-5 h-5 text-accent-teal flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-text-primary font-medium">Based in</p>
                                            <p className="text-text-secondary text-sm">Iselin, New Jersey</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Coffee className="w-5 h-5 text-accent-amber flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-text-primary font-medium">Current Role</p>
                                            <p className="text-text-secondary text-sm">
                                                Co-founder, EndtoEnd Ecommerce
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Heart className="w-5 h-5 text-accent-coral flex-shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-text-primary font-medium">Passionate About</p>
                                            <p className="text-text-secondary text-sm">
                                                Building tools that make complex things accessible
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Background */}
                            <div className="glass rounded-xl p-6">
                                <h3 className="font-display text-lg font-semibold mb-4">
                                    Background
                                </h3>
                                <ul className="space-y-2 text-sm text-text-secondary">
                                    <li>📍 Originally from India</li>
                                    <li>🎓 PGDM, IMT Ghaziabad</li>
                                    <li>🔧 Mechanical Engineering background</li>
                                    <li>🌏 Worked across US, Canada, India, Middle East</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
