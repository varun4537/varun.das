'use client';

import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';

// Project data with images and links
interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    githubUrl?: string;
    tags: string[];
}

const PROJECTS: Project[] = [
    {
        id: 'india-budget-explorer',
        title: 'India Budget Explorer',
        description: 'Interactive visualization of India\'s Union Budget with AI-powered insights and comparative analysis across years.',
        image: '/projects/india-budget-explorer.vercel.app.png',
        liveUrl: 'https://india-budget-explorer.vercel.app/',
        githubUrl: 'https://github.com/varun4537/india-budget-explorer',
        tags: ['Next.js', 'TypeScript', 'AI'],
    },
    {
        id: 'minimalist-task-manager',
        title: 'Minimalist Task Manager',
        description: 'A beautiful Chrome extension for managing tasks with Pomodoro timer, meditation modes, and focus features.',
        image: '/projects/Minimalist Task Manager.png',
        liveUrl: 'https://chromewebstore.google.com/detail/minimalist-task-manager/nboimjlpccmgehkfenfhaifdpjppeoll',
        githubUrl: 'https://github.com/varun4537/minimalist-task-manager',
        tags: ['Chrome Extension', 'JavaScript'],
    },
    {
        id: 'strategic-pricing-simulator',
        title: 'Strategic Pricing Simulator',
        description: 'Monte Carlo simulation tool for exploring pricing strategies and their impact on business outcomes.',
        image: '/projects/strategic-pricing-simulator.vercel.app.png',
        liveUrl: 'https://strategic-pricing-simulator.vercel.app/',
        githubUrl: 'https://github.com/varun4537/QCom-Reality-Check',
        tags: ['React', 'Simulation'],
    },
    {
        id: 'gap-charts',
        title: 'Gap Charts',
        description: 'A fun way to visualize the gaps between teams in the top 5 European football leagues.',
        image: '/projects/gap-charts.vercel.app.jpeg',
        liveUrl: 'https://gap-charts.vercel.app/',
        tags: ['Football', 'Visualization'],
    },
    {
        id: 'rock-paper-scissors',
        title: 'Rock Paper Scissors Simulator',
        description: 'Watch chaos unfold as physics-based agents bounce around and convert each other based on classic RPS rules.',
        image: '/projects/rock-paper-scissors-simulator.vercel.app.png',
        liveUrl: 'https://rock-paper-scissors-simulator.vercel.app/',
        tags: ['Simulation', 'Physics'],
    },
    {
        id: 'howsafeami',
        title: 'How Safe Am I',
        description: 'Browser security audit tool that checks HTTPS, WebRTC leaks, DNS security, cookies, and more in real-time.',
        image: '/projects/howsafeami.vercel.app.png',
        liveUrl: 'https://howsafeami.vercel.app/',
        tags: ['Security', 'Privacy'],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative overflow-hidden min-h-screen w-full flex items-center py-20 md:py-32">
            {/* Background image - full bleed */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/projects-bg.png)' }}
            />
            <div className="absolute inset-0 bg-background-primary/75" />

            <div className="container-custom relative z-10 px-6 md:px-12 lg:px-20">
                {/* Section header */}
                <div className="mb-12 text-center">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent-teal mb-2 block">
                        Things I&apos;ve Built
                    </span>
                    <h2 className="font-display text-[3.1rem] md:text-[4.4rem] lg:text-[5.6rem] font-bold mb-6 text-white drop-shadow-lg tracking-[-0.02em] leading-none">
                        Projects
                    </h2>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Ideas brought to life through code. Each project started with a question
                        and ended up teaching me something new.
                    </p>
                </div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, index) => (
                        <a
                            key={project.id}
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass rounded-xl overflow-hidden flex flex-col group shadow-floating hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Image thumbnail */}
                            <div className="relative w-full aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* Title */}
                                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-accent-teal transition-colors">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-text-secondary text-sm flex-grow mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs font-mono bg-background-tertiary/50 text-text-tertiary rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer with links */}
                                <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                                    <div className="flex gap-3">
                                        {project.githubUrl && (
                                            <span
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    window.open(project.githubUrl, '_blank');
                                                }}
                                                className="p-2 text-text-tertiary hover:text-accent-teal transition-colors rounded-lg hover:bg-background-tertiary/50"
                                                aria-label={`View ${project.title} on GitHub`}
                                            >
                                                <Github className="w-5 h-5" />
                                            </span>
                                        )}
                                    </div>
                                    <span className="flex items-center gap-1 text-xs text-accent-teal font-medium">
                                        View Project
                                        <ExternalLink className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* View all link */}
                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/varun4537?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-background-tertiary/90 backdrop-blur-md border-2 border-accent-teal hover:bg-accent-teal rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-glow"
                        style={{ color: 'white' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#0a0a0a'}
                        onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                    >
                        View All Projects
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
