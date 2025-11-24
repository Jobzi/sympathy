import React from 'react';

export interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    active?: boolean;
    theme?: 'light' | 'dark';
    className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
    children,
    active = false,
    theme = 'dark',
    className = '',
    ...props
}) => {
    const baseStyles = 'transition-colors tracking-wide text-sm';

    const themeStyles = theme === 'dark'
        ? 'text-white hover:text-orange-400'
        : 'text-black hover:text-orange-400';

    const activeStyles = active ? 'text-orange-400' : '';

    return (
        <a
            className={`${baseStyles} ${themeStyles} ${activeStyles} ${className}`}
            {...props}
        >
            {children}
        </a>
    );
};

export default NavLink;
