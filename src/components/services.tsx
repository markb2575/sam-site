"use client"

import { services } from "../lib/businessData";

export default function Services() {
  return (
    <section className="pt-20">
      <h2 className="text-5xl font-bold flex justify-center mb-20">Our Services</h2>
      <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-4 lg:mx-50 mx-5">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="relative h-80 rounded-2xl shadow-lg overflow-hidden group flex items-center justify-center"
          >
            <img
              src={service.image}
              alt={service.name}
              className="absolute inset-0 w-full size-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300" />
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
              <h3 className="mb-2 text-2xl font-bold text-white drop-shadow-lg">{service.name}</h3>
              <p className="text-white text-lg drop-shadow-lg">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
