"use client";
import { useState, useEffect } from "react";
import { gallery } from "../lib/businessData";

export default function Gallery() {
    const [modalIdx, setModalIdx] = useState<number | null>(null);

    const openModal = (idx: number) => setModalIdx(idx);
    const closeModal = () => setModalIdx(null);

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (modalIdx !== null) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [modalIdx]);

    return (
        <section className="pt-20 mx-5">
            <h2 className="text-5xl font-bold flex justify-center mb-20">
                Gallery
            </h2>
            <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-3">
                {gallery.map((item, idx) => (
                    <div
                        key={idx}
                        className="relative h-100 rounded-xl cursor-pointer overflow-hidden shadow-md group"
                        onClick={() => openModal(idx)}
                    >
                        {/* Image */}
                        <img
                            src={item.photo}
                            className="size-full object-cover block transition duration-300 group-hover:brightness-50"
                        />

                        {/* Description Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                            <p className="text-white text-xl font-normal tracking-wide text-center px-4">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {modalIdx !== null && (
                <div
                    onClick={closeModal}
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative items-center max-w-11/12 lg:max-w-1/2 p-0"
                    >
                        <button
                            onClick={closeModal}
                            className="absolute top-12 right-4 bg-black/60 text-white border-0 text-3xl cursor-pointer rounded-full w-10 h-10 flex items-center justify-center z-10"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                        <img
                            src={gallery[modalIdx].photo}
                            alt={
                                gallery[modalIdx].description ||
                                `Gallery photo ${modalIdx + 1}`
                            }
                            className="w-full h-full object-contain mt-8"
                        />
                        {gallery[modalIdx].description && (
                            <p className="mt-6 text-white flex justify-center text-xl font-normal tracking-wide">
                                {gallery[modalIdx].description}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
