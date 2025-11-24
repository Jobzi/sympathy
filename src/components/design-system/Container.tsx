import React from 'react';

export interface ContainerProps {
    children: React.ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    padding?: boolean;
}

const Container: React.FC<ContainerProps> = ({
    children,
    className = '',
    size = 'lg',
    padding = true
}) => {
    const sizeStyles = {
        sm: 'max-w-3xl',
        md: 'max-w-5xl',
        lg: 'max-w-7xl',
        xl: 'max-w-[1400px]',
        full: 'max-w-full'
    };

    const paddingStyles = padding ? 'px-4' : '';

    return (
        <div className={`container mx-auto ${sizeStyles[size]} ${paddingStyles} ${className}`}>
            {children}
        </div>
    );
};

export default Container;
