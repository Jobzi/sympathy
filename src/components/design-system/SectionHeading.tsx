import React from 'react';

export interface SectionHeadingProps {
    title: string;
    highlight?: string;
    subtitle?: string;
    theme?: 'light' | 'dark';
    align?: 'left' | 'center' | 'right';
    className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
    title,
    highlight,
    subtitle,
    theme = 'light',
    align = 'center',
    className = ''
}) => {
    const textColor = theme === 'light' ? 'text-gray-900' : 'text-white';
    const subtitleColor = theme === 'light' ? 'text-gray-600' : 'text-gray-400';
    const alignmentClass = `text-${align}`;

    return (
        <div className={`mb-16 ${alignmentClass} ${className}`}>
            <h2 className={`text-3xl md:text-4xl font-light mb-4 ${textColor}`}>
                {title} {highlight && <span className="font-medium">{highlight}</span>}
            </h2>
            {subtitle && (
                <p className={`${subtitleColor} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
