import React from 'react';
import { ChevronDown } from 'lucide-react';

export interface ScrollIndicatorProps {
    targetId?: string;
    position?: 'bottom' | 'center';
    className?: string;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
    targetId,
    position = 'bottom',
    className = ''
}) => {
    const handleClick = () => {
        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        }
    };

    const positionStyles = position === 'bottom'
        ? 'absolute bottom-8 left-0 right-0 flex justify-center'
        : 'flex justify-center';

    return (
        <div className={`${positionStyles} ${className}`}>
            <button
                onClick={handleClick}
                className="text-white animate-bounce hover:text-orange-400 transition-colors"
                aria-label="Scroll down"
            >
                <ChevronDown className="w-8 h-8" />
            </button>
        </div>
    );
};

export default ScrollIndicator;
