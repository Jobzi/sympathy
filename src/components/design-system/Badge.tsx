import React from 'react';

export interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = ''
}) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium uppercase tracking-wider rounded-full';

    const variants = {
        primary: 'bg-orange-400 text-black',
        secondary: 'bg-white text-black',
        outline: 'border-2 border-orange-400 text-orange-400'
    };

    const sizes = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1 text-xs',
        lg: 'px-4 py-2 text-sm'
    };

    return (
        <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;
