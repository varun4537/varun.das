'use client';

import { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

interface Repo {
    name: string;
    description: string;
    html_url: string;
    homepage: string | null;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
}

// Mapping of featured repos with display names
const FEATURED_REPOS: Record<string, string> = {
    'india-budget-explorer': 'India Budget Explorer',
    'minimalist-task-manager': 'Minimalist Task Manager',
    'MyShelf': 'MyShelf',
    'adcreativegenerator': 'AI Ad Creative Generator',
    'QCom-Reality-Check': 'Strategic Pricing Simulator',
};

const languageColors: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f7df1e',
    Python: '#3572A5',
    HTML: '#e34c26',
    CSS: '#563d7c',
};

export default function Projects() {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchRepos() {
            try {
                const response = await fetch(
                    'https://api.github.com/users/varun4537/repos?sort=updated&per_page=30'
                );
                if (!response.ok) throw new Error('Failed to fetch repos');

                const data: Repo[] = await response.json();

                // Filter to only featured repos
                const featuredRepoNames = Object.keys(FEATURED_REPOS);
                const featured = data.filter((repo) => featuredRepoNames.includes(repo.name));

                // Sort by the order in FEATURED_REPOS
                featured.sort((a, b) =>
                    featuredRepoNames.indexOf(a.name) - featuredRepoNames.indexOf(b.name)
                );

                setRepos(featured);
            } catch {
                setError('Unable to load projects');
            } finally {
                setLoading(false);
            }
        }

        fetchRepos();
    }, []);

    if (loading) {
        return (
            <section id="projects" className="section">
                <div className="container-custom">
                    <h2 className="font-display text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold mb-6 text-white">Projects</h2>
                    <p className="text-text-secondary mb-12">Loading projects...</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="floating-card p-6 h-48 animate-pulse bg-surface" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="projects" className="section">
                <div className="container-custom">
                    <h2 className="font-display text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold mb-6 text-white">Projects</h2>
                    <p className="text-text-secondary">{error}</p>
                </div>
            </section>
        );
    }

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
                        What I&apos;m Building
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
                    {repos.map((repo, index) => (
                        <article
                            key={repo.name}
                            className="glass rounded-xl p-6 flex flex-col group shadow-floating hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <Github className="w-8 h-8 text-text-tertiary group-hover:text-accent-teal transition-colors" />
                                <div className="flex gap-2">
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 text-text-tertiary hover:text-accent-teal transition-colors"
                                        aria-label={`View ${repo.name} on GitHub`}
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                    {repo.homepage && (
                                        <a
                                            href={repo.homepage}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 text-text-tertiary hover:text-accent-teal transition-colors"
                                            aria-label={`Visit ${repo.name} live site`}
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-accent-teal transition-colors">
                                {FEATURED_REPOS[repo.name] || repo.name}
                            </h3>

                            {/* Description */}
                            <p className="text-text-secondary text-sm flex-grow mb-4 line-clamp-3">
                                {repo.description || 'A project in progress...'}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-border-subtle">
                                {/* Language */}
                                {repo.language && (
                                    <div className="flex items-center gap-2">
                                        <span
                                            className="w-3 h-3 rounded-full"
                                            style={{
                                                backgroundColor: languageColors[repo.language] || '#666',
                                            }}
                                        />
                                        <span className="text-xs text-text-tertiary font-mono">
                                            {repo.language}
                                        </span>
                                    </div>
                                )}

                                {/* Stats */}
                                <div className="flex items-center gap-4">
                                    {repo.stargazers_count > 0 && (
                                        <div className="flex items-center gap-1 text-text-tertiary">
                                            <Star className="w-4 h-4" />
                                            <span className="text-xs">{repo.stargazers_count}</span>
                                        </div>
                                    )}
                                    {repo.forks_count > 0 && (
                                        <div className="flex items-center gap-1 text-text-tertiary">
                                            <GitFork className="w-4 h-4" />
                                            <span className="text-xs">{repo.forks_count}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </article>
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
