# Content Management Guide

Edit these files to update your website content without touching code!

---

## 📁 Files Overview

| File | Section | What to Edit |
|------|---------|--------------|
| `now.json` | What I'm Up To | Current projects, learning topics, reading |
| `interests.json` | What Interests Me | Focus areas with icons and descriptions |
| `curated.json` | Weekly Picks | Recommended articles, videos, tools |
| `about-facts.json` | About Me sidebar | Location, role, email |
| `projects.json` | Projects | GitHub username and featured repos |

---

## 📝 How to Edit Each File

### `now.json` - Current Activities
```json
{
  "lastUpdated": "January 2026",
  "building": [
    { "title": "Project Name", "description": "What it does" }
  ],
  "learning": ["Topic 1", "Topic 2"],
  "reading": "Current reading focus"
}
```

### `interests.json` - Focus Areas
```json
{
  "interests": [
    {
      "id": "unique-id",
      "title": "Interest Title",
      "description": "Brief description",
      "icon": "IconName"
    }
  ]
}
```
**Available icons:** `Code2`, `Camera`, `Telescope`, `ShoppingCart`, `Sparkles`, `Stars`, `ShoppingBag`

### `curated.json` - Weekly Recommendations
```json
{
  "weekOf": "January 6, 2026",
  "items": [
    {
      "title": "Article Title",
      "url": "https://example.com",
      "type": "article | video | tool",
      "commentary": "Why you liked it"
    }
  ]
}
```

### `about-facts.json` - Quick Facts
```json
{
  "location": "City, Country",
  "role": "Your Current Role",
  "email": "your@email.com"
}
```

### `projects.json` - GitHub Projects
```json
{
  "githubUsername": "your-username",
  "featuredRepos": ["repo-1", "repo-2"],
  "maxRepos": 6
}
```

---

## 💡 Tips

1. **Always use valid JSON** - Missing commas or quotes will break the site
2. **Test locally** after making changes (`npm run dev`)
3. **Keep descriptions concise** - They display better on mobile
4. **For bigger bio changes**, edit `src/components/About.tsx` directly

---

## 🚀 Quick Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```
