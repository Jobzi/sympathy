import React from 'react';

export interface OverlayProps {
    children?: React.ReactNode;
    opacity?: 'light' | 'medium' | 'dark' | 'darker';
    gradient?: boolean;
    className?: string;
}

const Overlay: React.FC<OverlayProps> = ({
    children,
    opacity = 'medium',
    gradient = false,
    className = ''
}) => {
    const opacities = {
        light: 'bg-black/20',
        medium: 'bg-black/40',
        dark: 'bg-black/60',
        darker: 'bg-black/80'
    };

    const gradientClass = gradient
        ? 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
        : opacities[opacity];

    return (
        <div className={`absolute inset-0 ${gradientClass} ${className}`}>
            {children}
        </div>
    );
};

export default Overlay;
