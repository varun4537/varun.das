import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    primary: "#0a0a0a",
                    secondary: "#141414",
                    tertiary: "#1a1a1a",
                    elevated: "#1f1f1f",
                },
                surface: {
                    DEFAULT: "#1a1a1a",
                    hover: "#222222",
                    active: "#2a2a2a",
                },
                border: {
                    subtle: "#2a2a2a",
                    DEFAULT: "#333333",
                    strong: "#444444",
                },
                text: {
                    primary: "#f5f5f5",
                    secondary: "#b8b8b8",
                    tertiary: "#808080",
                    disabled: "#4a4a4a",
                },
                accent: {
                    teal: {
                        50: "#e6f7f7",
                        100: "#b3e8e8",
                        200: "#80d9d9",
                        300: "#4dcaca",
                        400: "#2eb8b8",
                        500: "#1a9999",
                        600: "#167d7d",
                        700: "#116161",
                        800: "#0d4545",
                        900: "#082929",
                        DEFAULT: "#1a9999",
                    },
                    blue: {
                        DEFAULT: "#3b82f6",
                        600: "#2563eb",
                    },
                    amber: {
                        DEFAULT: "#f59e0b",
                        600: "#d97706",
                    },
                    coral: {
                        DEFAULT: "#ff7a6b",
                        600: "#ff5a47",
                    },
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
                display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
                accent: ["var(--font-playfair)", "Georgia", "serif"],
                mono: ["var(--font-jetbrains)", "monospace"],
            },
            fontSize: {
                hero: ["7rem", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
                "hero-tablet": ["5rem", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
                "hero-mobile": ["3.5rem", { lineHeight: "1.0", letterSpacing: "-0.03em" }],
                "section": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
                "section-tablet": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
                "section-mobile": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
            },
            boxShadow: {
                subtle: "0 2px 8px rgba(0, 0, 0, 0.4)",
                medium: "0 4px 16px rgba(0, 0, 0, 0.5)",
                elevated: "0 8px 32px rgba(0, 0, 0, 0.6)",
                floating: "0 12px 48px rgba(0, 0, 0, 0.7), 0 0 20px rgba(26, 153, 153, 0.1)",
                hero: "0 20px 60px rgba(0, 0, 0, 0.8)",
                glow: "0 0 40px rgba(26, 153, 153, 0.3)",
                "glow-subtle": "0 0 20px rgba(26, 153, 153, 0.15)",
            },
            animation: {
                "fade-in": "fadeIn 0.4s ease-out",
                "slide-up": "slideUp 0.4s ease-out",
                "scale-in": "scaleIn 0.3s ease-out",
                float: "float 6s ease-in-out infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                scaleIn: {
                    "0%": { opacity: "0", transform: "scale(0.95)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
            transitionTimingFunction: {
                smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
            },
        },
    },
    plugins: [],
};

export default config;
