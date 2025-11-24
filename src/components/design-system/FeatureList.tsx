import React from 'react';

export interface FeatureListProps {
    items: string[];
    bulletColor?: 'primary' | 'white' | 'black';
    align?: 'left' | 'center' | 'right';
    className?: string;
}

const FeatureList: React.FC<FeatureListProps> = ({
    items,
    bulletColor = 'primary',
    align = 'center',
    className = ''
}) => {
    const colors = {
        primary: 'bg-orange-400',
        white: 'bg-white',
        black: 'bg-black'
    };

    const alignmentClass = align === 'center' ? 'justify-center' : align === 'right' ? 'justify-end' : 'justify-start';

    return (
        <ul className={`space-y-3 ${className}`}>
            {items.map((item, index) => (
                <li
                    key={index}
                    className={`flex items-center ${alignmentClass} text-gray-700`}
                >
                    <span className={`w-2 h-2 ${colors[bulletColor]} rounded-full mr-2 flex-shrink-0`} />
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default FeatureList;
