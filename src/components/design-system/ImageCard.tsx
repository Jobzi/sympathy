import React from 'react';

export interface ImageCardProps {
    image: string;
    alt: string;
    category?: string;
    title?: string;
    aspectRatio?: 'square' | 'portrait' | 'landscape' | 'video';
    overlay?: boolean;
    className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({
    image,
    alt,
    category,
    title,
    aspectRatio = 'portrait',
    overlay = true,
    className = ''
}) => {
    const aspectRatios = {
        square: 'aspect-square',
        portrait: 'aspect-[4/5]',
        landscape: 'aspect-[16/9]',
        video: 'aspect-video'
    };

    return (
        <div className={`group relative overflow-hidden rounded-lg ${aspectRatios[aspectRatio]} ${className}`}>
            <img
                src={image}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
            />
            {overlay && (category || title) && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {category && (
                            <span className="text-orange-400 text-sm uppercase tracking-wider">
                                {category}
                            </span>
                        )}
                        {title && (
                            <h3 className="text-white text-xl font-light mt-2">
                                {title}
                            </h3>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageCard;
