'use client';

import { useState, useMemo } from 'react';
import { Link2, Video, Wrench, Calendar, ArrowLeft, Filter, LucideIcon } from 'lucide-react';
import curatedContent from '@/../content/curated.json';

// Icon mapping for recommendation types
const iconMap: Record<string, LucideIcon> = {
    article: Link2,
    video: Video,
    tool: Wrench,
};

// Get all unique topics from content
const getAllTopics = () => {
    const topics = new Set<string>();
    curatedContent.weeks.forEach(week => {
        week.items.forEach(item => {
            item.topics?.forEach(topic => topics.add(topic));
        });
    });
    return Array.from(topics).sort();
};

export default function CuratedArchive() {
    const [filter, setFilter] = useState<'all' | 'week' | 'topic'>('all');
    const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

    const allTopics = useMemo(() => getAllTopics(), []);

    // Filter items based on current filter
    const filteredWeeks = useMemo(() => {
        if (filter === 'all' || filter === 'week') {
            return curatedContent.weeks;
        }

        if (filter === 'topic' && selectedTopic) {
            return curatedContent.weeks.map(week => ({
                ...week,
                items: week.items.filter(item =>
                    item.topics?.includes(selectedTopic)
                )
            })).filter(week => week.items.length > 0);
        }

        return curatedContent.weeks;
    }, [filter, selectedTopic]);

    const totalItems = curatedContent.weeks.reduce((acc, week) => acc + week.items.length, 0);

    return (
        <main className="min-h-screen relative pt-24 pb-20">
            {/* Background image */}
            <div
                className="fixed inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(/curated-archive-bg.png)' }}
            />
            <div className="fixed inset-0 bg-background-primary/85" />

            <div className="container-custom relative z-10 px-6 md:px-12 lg:px-20">
                {/* Back link */}
                <a
                    href="/"
                    className="inline-flex items-center gap-2 text-text-tertiary hover:text-accent-teal transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </a>

                {/* Header */}
                <div className="mb-12 text-center">
                    <span className="font-mono text-xs uppercase tracking-widest text-accent-coral mb-2 block">
                        Archive
                    </span>
                    <h1 className="font-display text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold mb-4 text-white tracking-[-0.02em] leading-none">
                        Curated Recommendations
                    </h1>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        A collection of articles, videos, and tools I&apos;ve found interesting.
                        {' '}<span className="text-text-tertiary">{totalItems} items across {curatedContent.weeks.length} weeks.</span>
                    </p>
                </div>

                {/* Filters */}
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <Filter className="w-4 h-4 text-text-tertiary" />
                        <span className="text-sm text-text-tertiary">Filter by:</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                        <button
                            onClick={() => { setFilter('all'); setSelectedTopic(null); }}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === 'all'
                                ? 'bg-accent-teal text-background-primary'
                                : 'bg-background-tertiary text-text-secondary hover:text-white border border-border-subtle'
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => { setFilter('week'); setSelectedTopic(null); }}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === 'week'
                                ? 'bg-accent-teal text-background-primary'
                                : 'bg-background-tertiary text-text-secondary hover:text-white border border-border-subtle'
                                }`}
                        >
                            By Week
                        </button>
                        <button
                            onClick={() => setFilter('topic')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filter === 'topic'
                                ? 'bg-accent-teal text-background-primary'
                                : 'bg-background-tertiary text-text-secondary hover:text-white border border-border-subtle'
                                }`}
                        >
                            By Topic
                        </button>
                    </div>

                    {/* Topic pills */}
                    {filter === 'topic' && (
                        <div className="flex flex-wrap gap-2">
                            {allTopics.map(topic => (
                                <button
                                    key={topic}
                                    onClick={() => setSelectedTopic(topic)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all capitalize ${selectedTopic === topic
                                        ? 'bg-accent-coral text-white'
                                        : 'bg-background-tertiary text-text-secondary hover:text-white border border-border-subtle'
                                        }`}
                                >
                                    {topic}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="space-y-12">
                    {filteredWeeks.map((week, weekIndex) => (
                        <div key={weekIndex}>
                            {/* Week header */}
                            <div className="flex items-center gap-3 mb-6">
                                <Calendar className="w-5 h-5 text-accent-teal" />
                                <h2 className="font-display text-xl font-semibold text-white">
                                    Week of {week.weekOf}
                                </h2>
                            </div>

                            {/* Items grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {week.items.map((item, itemIndex) => {
                                    const IconComponent = iconMap[item.type] || Link2;
                                    return (
                                        <a
                                            key={itemIndex}
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="glass rounded-xl p-5 group hover:-translate-y-1 transition-all duration-300 hover:shadow-glow"
                                        >
                                            {/* Type & Topics */}
                                            <div className="flex items-center gap-2 mb-3 flex-wrap">
                                                <span className="inline-flex items-center gap-1.5 px-2 py-1 bg-accent-teal/10 text-accent-teal rounded text-xs font-medium">
                                                    <IconComponent className="w-3 h-3" />
                                                    {item.type}
                                                </span>
                                                {item.topics?.slice(0, 2).map(topic => (
                                                    <span
                                                        key={topic}
                                                        className="px-2 py-1 bg-background-tertiary text-text-tertiary rounded text-xs capitalize"
                                                    >
                                                        {topic}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Title */}
                                            <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-accent-teal transition-colors">
                                                {item.title}
                                            </h3>

                                            {/* Commentary */}
                                            <p className="text-text-secondary text-sm italic line-clamp-2">
                                                &quot;{item.commentary}&quot;
                                            </p>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty state */}
                {filteredWeeks.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-text-tertiary">No recommendations found for this filter.</p>
                    </div>
                )}
            </div>
        </main>
    );
}
