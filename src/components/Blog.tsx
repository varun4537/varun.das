'use client';

import { useState, useEffect } from 'react';
import { Calendar, ArrowUpRight } from 'lucide-react';

interface BlogPost {
    title: string;
    link: string;
    pubDate: string;
    excerpt: string;
}

export default function Blog() {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBlog() {
            try {
                const response = await fetch('/api/blog');
                if (!response.ok) throw new Error('Failed to fetch blog posts');

                const data = await response.json();
                setPosts(data.slice(0, 3));
            } catch {
                setError('Unable to load blog posts');
            } finally {
                setLoading(false);
            }
        }

        fetchBlog();
    }, []);

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    };

    if (loading) {
        return (
            <section id="blog" className="section">
                <div className="container-custom">
                    <h2 className="font-display text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold mb-6 text-white">From the Blog</h2>
                    <p className="text-text-secondary mb-12">Loading posts...</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="floating-card p-6 h-64 animate-pulse bg-surface" />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    if (error || posts.length === 0) {
        return (
            <section id="blog" className="section">
                <div className="container-custom">
                    <div className="mb-12">
                        <span className="font-mono text-xs uppercase tracking-widest text-accent-teal mb-2 block">
                            Reflections
                        </span>
                        <h2 className="font-display text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold mb-6 text-white">
                            From the Blog
                        </h2>
                        <p className="text-text-secondary text-lg max-w-2xl">
                            Thoughts on life, work, and everything in between.
                        </p>
                    </div>

                    <a
                        href="https://betweenbeginningsblog.wordpress.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-accent-teal text-background-primary hover:bg-accent-teal-600 rounded-lg font-medium transition-all hover:-translate-y-1 hover:shadow-glow"
                    >
                        Visit Blog
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </section>
        );
    }

    return (
        <section id="blog" className="relative overflow-hidden min-h-screen w-full flex items-center py-20 md:py-32">
            {/* Background image - full bleed */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/blog-bg.png)' }}
            />
            <div className="absolute inset-0 bg-background-primary/80" />

            <div className="container-custom relative z-10 px-6 md:px-12 lg:px-20">
                {/* Section header */}
                <div className="mb-12 text-center">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent-teal mb-2 block">
                        Reflections
                    </span>
                    <h2 className="font-display text-[3.1rem] md:text-[4.4rem] lg:text-[5.6rem] font-bold mb-6 text-white drop-shadow-lg tracking-[-0.02em] leading-none">
                        From the Blog
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Thoughts on life, work, and everything in between. Short essays,
                        observations, and the occasional poem.
                    </p>
                </div>

                {/* Blog posts grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post, index) => (
                        <a
                            key={post.link}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass rounded-xl p-6 flex flex-col group shadow-floating hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            {/* Date */}
                            <div className="flex items-center gap-2 text-text-tertiary mb-4">
                                <Calendar className="w-4 h-4" />
                                <span className="font-mono text-xs">
                                    {formatDate(post.pubDate)}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="font-accent text-xl font-medium mb-3 group-hover:text-accent-teal transition-colors line-clamp-2">
                                {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-text-secondary text-sm flex-grow mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>

                            {/* Read more */}
                            <div className="flex items-center gap-2 text-accent-teal font-medium text-sm mt-auto">
                                Read more
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </a>
                    ))}
                </div>

                {/* View all link */}
                <div className="mt-12 text-center">
                    <a
                        href="https://betweenbeginningsblog.wordpress.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-accent-teal text-accent-teal hover:bg-accent-teal/10 rounded-lg font-medium transition-all hover:-translate-y-1"
                    >
                        View All Posts
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
