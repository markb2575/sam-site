"use client";
import { useEffect, useState } from "react";
import { gallery } from "../lib/businessData";
import { companyInfo, contactInfo } from "../lib/businessData";
import { Mail, PhoneIcon, CalendarDays, ArrowDown } from "lucide-react";

export default function Hero() {
    const images = gallery.map((item) => item.photo);
    const [imageFront, setImageFront] = useState(images[0]);
    const [imageBack, setImageBack] = useState(images[1]);
    const [fadeToggle, setFadeToggle] = useState(true);
    const [idx, setIdx] = useState(0);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView();
        }
    };
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIdx = (idx + 1) % images.length;

            if (fadeToggle) {
                setImageBack(images[nextIdx]);
            } else {
                setImageFront(images[nextIdx]);
            }

            setFadeToggle((prev) => !prev);
            setIdx(nextIdx);
        }, 5000);

        return () => clearInterval(interval);
    }, [idx, images, fadeToggle]);

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden rounded-none shadow-none">
            {/* Background image */}
            <img
                src={imageFront}
                alt="Hero"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    fadeToggle ? "opacity-100" : "opacity-0"
                }`}
            />
            <img
                src={imageBack}
                alt="Hero"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    fadeToggle ? "opacity-0" : "opacity-100"
                }`}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />
            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center text-white px-4 gap-10">
                <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow mb-2 mt-8 md:mt-0">
                    {companyInfo.name}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-6 drop-shadow">
                    {companyInfo.type}
                </h2>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <a
                        className="flex items-center gap-2 text-lg hover:underline"
                        href={`mailto:${contactInfo.email}`}
                    >
                        <Mail /> {contactInfo.email}
                    </a>
                    <a
                        className="flex items-center gap-2 text-lg hover:underline"
                        href={`tel:${contactInfo.phone.replace(/[^\d+]/g, "")}`}
                    >
                        <PhoneIcon /> {contactInfo.phone}
                    </a>
                    <a
                        className="flex items-center gap-2 text-lg hover:underline"
                        href={contactInfo.calendar}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <CalendarDays /> Book a meeting
                    </a>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => scrollToSection("services-section")}
                        className="border-1 rounded-md font-semibold px-6 py-2 transition backdrop-blur-xs border-white/40 hover:bg-white/20 hover:border-transparent"
                    >
                        View Services
                    </button>
                    <button
                        onClick={() => scrollToSection("gallery-section")}
                        className="border-1 rounded-md font-semibold px-6 py-2 transition backdrop-blur-xs border-white/40 hover:bg-white/20 hover:border-transparent"
                    >
                        View Gallery
                    </button>
                </div>
            </div>
            {/* Animated arrows at the bottom center */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30">
                <div className="flex gap-5 dark:text-neutral-300 text-neutral-700 animate-bounce">
                    <ArrowDown />
                    <ArrowDown />
                    <ArrowDown />
                </div>
            </div>
        </section>
    );
}
