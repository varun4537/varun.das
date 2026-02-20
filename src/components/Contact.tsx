'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');

        try {
            const response = await fetch('https://formspree.io/f/mvzgebqe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormState('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setFormState('error');
            }
        } catch {
            setFormState('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="relative overflow-hidden py-20 md:py-32">
            {/* Background image */}
            <Image
                src="/contact-bg.png"
                alt="Contact Background"
                fill
                className="object-cover"
                quality={85}
            />
            <div className="absolute inset-0 bg-background-primary/80" />

            <div className="container-custom relative z-10 px-6 md:px-12 lg:px-20">
                <div className="max-w-2xl mx-auto">
                    {/* Section header */}
                    <div className="mb-12 text-center">
                        <span className="font-mono text-xs uppercase tracking-widest text-accent-teal mb-2 block">
                            Let&apos;s Connect
                        </span>
                        <h2 className="font-display text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold mb-6 text-white drop-shadow-lg tracking-[-0.02em] leading-none">
                            Get in Touch
                        </h2>
                        <p className="text-text-secondary text-lg">
                            Have a question, want to collaborate, or just want to say hi?
                            Drop me a message below.
                        </p>
                    </div>

                    {/* Contact form */}
                    {formState === 'success' ? (
                        <div className="glass rounded-2xl p-8 md:p-12 text-center shadow-floating">
                            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                            <h3 className="font-display text-2xl font-semibold mb-2 text-white">
                                Message Sent!
                            </h3>
                            <p className="text-text-secondary mb-6">
                                Thanks for reaching out. I&apos;ll get back to you soon.
                            </p>
                            <button
                                onClick={() => setFormState('idle')}
                                className="text-accent-teal hover:underline"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-12 shadow-floating">
                            {formState === 'error' && (
                                <div role="alert" aria-live="polite" className="flex items-center gap-3 p-4 mb-6 bg-red-500/10 border border-red-500/30 rounded-lg">
                                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                                    <p className="text-red-400 text-sm">
                                        Something went wrong. Please try again or email me directly.
                                    </p>
                                </div>
                            )}

                            <div className="space-y-6">
                                {/* Name field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-background-tertiary border border-border-subtle rounded-lg text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent-teal transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-background-tertiary border border-border-subtle rounded-lg text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent-teal transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Message field */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-background-tertiary border border-border-subtle rounded-lg text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent-teal transition-colors resize-none"
                                        placeholder="Hey Varun, I wanted to reach out about..."
                                    />
                                </div>

                                {/* Submit button */}
                                <button
                                    type="submit"
                                    disabled={formState === 'submitting'}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent-teal hover:bg-accent-teal-600 disabled:opacity-50 disabled:cursor-not-allowed text-background-primary font-medium rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-glow"
                                >
                                    {formState === 'submitting' ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-background-primary/30 border-t-background-primary rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
