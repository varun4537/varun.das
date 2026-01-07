import { NextResponse } from 'next/server';

interface BlogPost {
    title: string;
    link: string;
    pubDate: string;
    excerpt: string;
}

export async function GET() {
    try {
        const response = await fetch(
            'https://betweenbeginningsblog.wordpress.com/feed/',
            {
                next: { revalidate: 3600 }, // Cache for 1 hour
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch RSS feed');
        }

        const xml = await response.text();

        // Parse RSS XML
        const posts: BlogPost[] = [];

        // Extract items using regex (simple XML parsing)
        const itemRegex = /<item>([\s\S]*?)<\/item>/g;
        const titleRegex = /<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/;
        const linkRegex = /<link>(.*?)<\/link>/;
        const pubDateRegex = /<pubDate>(.*?)<\/pubDate>/;
        const descriptionRegex = /<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>|<description>([\s\S]*?)<\/description>/;

        let match;
        while ((match = itemRegex.exec(xml)) !== null) {
            const item = match[1];

            const titleMatch = item.match(titleRegex);
            const linkMatch = item.match(linkRegex);
            const pubDateMatch = item.match(pubDateRegex);
            const descriptionMatch = item.match(descriptionRegex);

            const rawTitle = titleMatch?.[1] || titleMatch?.[2] || '';
            const link = linkMatch?.[1] || '';
            const pubDate = pubDateMatch?.[1] || '';
            const fullDescription = descriptionMatch?.[1] || descriptionMatch?.[2] || '';

            // Helper to decode HTML entities
            const decodeEntities = (str: string) => str
                .replace(/<[^>]*>/g, '') // Remove HTML tags
                .replace(/&nbsp;/g, ' ')
                .replace(/&amp;/g, '&')
                .replace(/&quot;/g, '"')
                .replace(/&#8217;/g, "'")
                .replace(/&#8216;/g, "'")
                .replace(/&#8220;/g, '"')
                .replace(/&#8221;/g, '"')
                .replace(/&#8230;/g, '...')
                .replace(/&#8211;/g, '–')
                .replace(/&#8212;/g, '—')
                .replace(/&rsquo;/g, "'")
                .replace(/&lsquo;/g, "'")
                .replace(/&rdquo;/g, '"')
                .replace(/&ldquo;/g, '"')
                .replace(/\s+/g, ' ')
                .trim();

            const title = decodeEntities(rawTitle);
            const excerpt = decodeEntities(fullDescription).slice(0, 200) + '...';

            if (title && link) {
                posts.push({
                    title,
                    link,
                    pubDate,
                    excerpt,
                });
            }

            if (posts.length >= 3) break;
        }

        return NextResponse.json(posts);
    } catch (error) {
        console.error('Error fetching blog:', error);
        return NextResponse.json(
            { error: 'Failed to fetch blog posts' },
            { status: 500 }
        );
    }
}
