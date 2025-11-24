import React from 'react';

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    gradient?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hover = true,
    gradient = true,
    padding = 'md'
}) => {
    const baseStyles = 'bg-white rounded-lg shadow-lg relative overflow-hidden';
    const hoverStyles = hover ? 'hover:shadow-xl transition-all duration-300' : '';
    const gradientBar = gradient ? (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
    ) : null;

    const paddingStyles = {
        none: '',
        sm: 'p-4',
        md: 'p-8',
        lg: 'p-12'
    };

    return (
        <div className={`group ${baseStyles} ${hoverStyles} ${paddingStyles[padding]} ${className}`}>
            {gradientBar}
            {children}
        </div>
    );
};

export default Card;
