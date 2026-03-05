"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mbdzranp", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setIsSuccess(true);
                form.reset();
            } else {
                console.error("Form submission failed");
            }
        } catch (error) {
            console.error("Form submission error", error);
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <main className="flex min-h-screen w-full flex-col items-start justify-start pt-32 pb-24 px-6 md:px-12 bg-neutral-950 text-neutral-100 overflow-hidden">

            {/* Header Section */}
            <div className="w-full max-w-7xl mx-auto mb-20 md:mb-32">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[15vw] sm:text-[12vw] md:text-[8rem] lg:text-[11rem] xl:text-[13rem] font-black tracking-tighter leading-[0.8] text-white uppercase mix-blend-difference"
                >
                    Start a<br />project.
                </motion.h1>
            </div>

            {/* 01. How it works Section */}
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-24 mb-32 pt-16 border-t border-neutral-800">
                <div className="md:w-1/3 flex flex-col pt-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xs font-mono text-neutral-500 uppercase tracking-widest md:sticky top-32"
                    >
                        [01] How it works
                    </motion.h2>
                </div>

                <div className="md:w-2/3 flex flex-col w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-8 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed tracking-tight text-neutral-400"
                    >
                        <p>
                            All projects are structurally engineered for <span className="text-neutral-100">SEO optimization</span>, ensuring absolute performance across any device. Accessibility is not an afterthought; it&apos;s a structural requirement to reach a global audience.
                        </p>
                        <p>
                            When you are ready, we hit the ground running. The onboarding protocol establishes a dedicated <span className="text-neutral-100">Slack channel</span> to keep communication direct, frictionless, and strictly focused on execution.
                        </p>
                        <p className="border-l border-neutral-800 pl-6">
                            <span className="text-xs font-mono text-white/30 uppercase tracking-widest block mb-2">Scope Note</span>
                            Typography licensing and custom photography are excluded from the baseline scope. If you run a <span className="text-neutral-100">Google Analytics</span> property, I will wire it directly into the core for absolute tracking.
                        </p>
                        <p>
                            Feedback loops are tight and functional. We rely on <span className="text-neutral-100">Figma</span> for design reviews and <span className="text-neutral-100">Jam.dev</span> for live-site comments. Zero noise, total clarity.
                        </p>
                        <p>
                            Once the build is complete, your application will be deployed to the high-performance infrastructure of your choice (<span className="text-neutral-300">Netlify, Vercel, or a custom VPS</span>).
                        </p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white pt-12 mt-12 border-t border-neutral-800 leading-[1.1]"
                        >
                            After you submit the form below, I will reach out directly to your email to initiate our collaboration. <br /> <span className="text-[#a3e635] selection:bg-[#a3e635] selection:text-black mt-4 block">Let&apos;s build.</span>
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* 02. Connection Section */}
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-24">

                {/* Left Column: Contact Info */}
                <div className="md:w-1/3 flex flex-col pt-4 gap-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xs font-mono text-neutral-500 uppercase tracking-widest md:sticky top-32"
                    >
                        [02] Reach Out
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-4"
                    >
                        <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
                            Direct Line
                        </h3>
                        <a
                            href="mailto:pedropetenon@gmail.com"
                            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter hover:text-white transition-colors"
                        >
                            pedropetenon@gmail.com
                        </a>
                        <a
                            href="https://wa.me/5519998689239"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-400 hover:text-white transition-colors"
                        >
                            +55 (19) 99868-9239
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-4"
                    >
                        <h3 className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
                            Socials
                        </h3>
                        <div className="flex flex-col gap-2">
                            {[
                                { name: 'Instagram', url: 'https://www.instagram.com/pedropetenon' },
                                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/pedro-petenon-b81371328/' },
                                { name: 'X', url: 'https://x.com/PedroPetenon' },
                                { name: 'GitHub', url: 'https://github.com/pedropetenon' }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg font-medium text-neutral-400 hover:text-white transition-colors flex items-center justify-between group border-b border-neutral-800 pb-2 w-full max-w-[200px]"
                                >
                                    <div className="relative overflow-hidden h-[28px] w-full">
                                        <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] -translate-y-1/2 group-hover:translate-y-0">
                                            <span className="h-[28px] flex items-center">{social.name}</span>
                                            <span className="h-[28px] flex items-center">{social.name}</span>
                                        </div>
                                    </div>
                                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Form */}
                <div className="md:w-2/3 flex flex-col w-full">
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-12 w-full"
                    >
                        <div className="flex flex-col gap-2 relative group">
                            <label htmlFor="name" className="text-xs font-mono text-neutral-500 uppercase tracking-widest absolute top-0 left-0 transition-all duration-300 transform -translate-y-6 group-focus-within:text-white">01. What&apos;s your name?</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                className="w-full bg-transparent border-b-2 border-neutral-800 py-4 text-2xl md:text-4xl font-bold tracking-tighter text-white placeholder-neutral-700 outline-none focus:border-white transition-colors rounded-none"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2 relative group mt-8">
                            <label htmlFor="email" className="text-xs font-mono text-neutral-500 uppercase tracking-widest absolute top-0 left-0 transition-all duration-300 transform -translate-y-6 group-focus-within:text-white">02. What&apos;s your email?</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john@example.com"
                                className="w-full bg-transparent border-b-2 border-neutral-800 py-4 text-2xl md:text-4xl font-bold tracking-tighter text-white placeholder-neutral-700 outline-none focus:border-white transition-colors rounded-none"
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2 relative group mt-8">
                            <label htmlFor="message" className="text-xs font-mono text-neutral-500 uppercase tracking-widest absolute top-0 left-0 transition-all duration-300 transform -translate-y-6 group-focus-within:text-white">03. Tell me about your project</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder="Let&apos;s build something brutal..."
                                className="w-full bg-transparent border-b-2 border-neutral-800 py-4 text-2xl md:text-3xl font-medium tracking-tight text-white placeholder-neutral-700 outline-none focus:border-white transition-colors resize-none rounded-none"
                                required
                            ></textarea>
                        </div>

                        <div className="mt-8">
                            <button
                                type="submit"
                                disabled={isSubmitting || isSuccess}
                                className="group relative inline-flex items-center justify-center bg-white text-black px-8 py-6 text-xl md:text-2xl font-bold uppercase tracking-widest overflow-hidden transition-all duration-500 hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="relative z-10 flex items-center gap-4">
                                    {isSubmitting ? "Transmitting..." : isSuccess ? "Message Received" : "Send Message"}
                                    {isSuccess ? (
                                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                                    ) : (
                                        <ArrowRight className={`w-6 h-6 transition-transform duration-300 ${isSubmitting ? "" : "group-hover:translate-x-2"}`} />
                                    )}
                                </span>
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>

        </main>
    );
}
