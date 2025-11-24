import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface IconBoxProps {
    icon: LucideIcon;
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'white' | 'black';
    className?: string;
}

const IconBox: React.FC<IconBoxProps> = ({
    icon: Icon,
    size = 'md',
    color = 'primary',
    className = ''
}) => {
    const sizes = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16'
    };

    const colors = {
        primary: 'text-orange-400',
        white: 'text-white',
        black: 'text-black'
    };

    return (
        <div className={`flex justify-center items-center ${className}`}>
            <Icon className={`${sizes[size]} ${colors[color]}`} />
        </div>
    );
};

export default IconBox;
