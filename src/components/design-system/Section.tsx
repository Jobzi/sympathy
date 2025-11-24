import React from 'react';

export interface SectionProps {
    children: React.ReactNode;
    id?: string;
    background?: 'white' | 'black' | 'gray';
    padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

const Section: React.FC<SectionProps> = ({
    children,
    id,
    background = 'white',
    padding = 'lg',
    className = ''
}) => {
    const backgrounds = {
        white: 'bg-white',
        black: 'bg-black',
        gray: 'bg-gray-50'
    };

    const paddings = {
        none: '',
        sm: 'py-12',
        md: 'py-16',
        lg: 'py-24',
        xl: 'py-32'
    };

    return (
        <section
            id={id}
            className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
        >
            {children}
        </section>
    );
};

export default Section;
