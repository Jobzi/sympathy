import React, { useState, useEffect } from 'react';

export interface CarouselSlide {
    image: string;
    title?: string;
    alt: string;
}

export interface CarouselProps {
    slides: CarouselSlide[];
    autoPlay?: boolean;
    interval?: number;
    showIndicators?: boolean;
    children?: (slide: CarouselSlide, index: number) => React.ReactNode;
    className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
    slides,
    autoPlay = true,
    interval = 5000,
    showIndicators = true,
    children,
    className = ''
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!autoPlay) return;

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, slides.length]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {children ? children(slide, index) : (
                        <div
                            className="absolute inset-0 bg-center bg-cover"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />
                    )}
                </div>
            ))}

            {showIndicators && (
                <div className="absolute bottom-12 right-12 hidden md:flex space-x-2 z-10">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-orange-400 w-8' : 'bg-white/50'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Carousel;
