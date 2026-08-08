"use client"

import { useState, useEffect } from "react"

const slides = [
    {
        image: "/slide1.jpg",
        caption: "Delicious Nigerian Cuisine, Made Fresh Daily",
    },
    {
        image: "/slide2.jpg",
        caption: "Order Your Favorite Dishes in Minutes",
    },
    {
        image: "/slide3.jpg",
        caption: "Food Is Ready!!!",
    },
    {
        image: "/slide4.jpg",
        caption: "Fresh Drinks & Desserts Await You",
    },
];

export default function heroslider() {
    const [current, steCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            steCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-64 overflow-hidden">
            {slides.map((slide, index) => (
                <div 
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                    index === current ? "opacity-100" : "opacity-0"
                }`}>
                <img
                    src={slide.image}
                    alt={slide.caption}
                    className="w-full h-full object-cover"/>

                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h2 className="text-white text-xl md:text-2xl font-bold text-center px-4">{slide.caption}</h2>
                    </div>
                    </div>
            ))}

        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, index) => (
                <button
                key={index}
                onClick={() => steCurrent(index)}
                className={`w-2 h-2 rounded-full ${
                    index === current ? "bg-secondary" : "bg-white/50"
                }`}/>
            ))}
        </div>
        </div>

    );
}