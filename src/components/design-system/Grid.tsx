import React from 'react';

export interface GridProps {
    children: React.ReactNode;
    cols?: {
        default?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
    };
    gap?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
}

const Grid: React.FC<GridProps> = ({
    children,
    cols = { default: 1, md: 2, lg: 3 },
    gap = 'md',
    className = ''
}) => {
    const gapStyles = {
        sm: 'gap-4',
        md: 'gap-6',
        lg: 'gap-8',
        xl: 'gap-12'
    };

    const colClasses = [
        cols.default && `grid-cols-${cols.default}`,
        cols.sm && `sm:grid-cols-${cols.sm}`,
        cols.md && `md:grid-cols-${cols.md}`,
        cols.lg && `lg:grid-cols-${cols.lg}`,
        cols.xl && `xl:grid-cols-${cols.xl}`
    ].filter(Boolean).join(' ');

    return (
        <div className={`grid ${colClasses} ${gapStyles[gap]} ${className}`}>
            {children}
        </div>
    );
};

export default Grid;
