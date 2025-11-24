import React from 'react';

export interface LogoProps {
    size?: 'sm' | 'md' | 'lg';
    showText?: boolean;
    theme?: 'light' | 'dark';
    className?: string;
}

const Logo: React.FC<LogoProps> = ({
    size = 'md',
    showText = true,
    theme = 'dark',
    className = ''
}) => {
    const sizes = {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };

    const textSizes = {
        sm: 'text-base',
        md: 'text-xl',
        lg: 'text-2xl'
    };

    const textColor = theme === 'dark' ? 'text-white' : 'text-black';

    return (
        <a href="#" className={`flex items-center space-x-3 ${className}`}>
            <img
                src="/sp-w.svg"
                alt="Sympathy Studio Logo"
                className={sizes[size]}
            />
            {showText && (
                <span className={`${textColor} ${textSizes[size]} font-light tracking-wider`}>
                    SYMPATHY <span className="font-medium">STUDIO</span>
                </span>
            )}
        </a>
    );
};

export default Logo;
