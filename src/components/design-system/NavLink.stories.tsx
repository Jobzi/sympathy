import type { Meta, StoryObj } from '@storybook/react';
import NavLink from './NavLink';

const meta = {
    title: 'Design System/Navigation/NavLink',
    component: NavLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        active: {
            control: 'boolean',
        },
        theme: {
            control: 'select',
            options: ['light', 'dark'],
        },
    },
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        href: '#home',
        theme: 'dark',
        active: false,
        children: 'Home',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};

export const Active: Story = {
    args: {
        href: '#portfolio',
        theme: 'dark',
        active: true,
        children: 'Portfolio',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};

export const LightTheme: Story = {
    args: {
        href: '#services',
        theme: 'light',
        active: false,
        children: 'Services',
    },
};

export const LightThemeActive: Story = {
    args: {
        href: '#about',
        theme: 'light',
        active: true,
        children: 'About',
    },
};

export const NavigationBar: Story = {
    render: () => (
        <div className="flex gap-8 bg-black p-4 rounded">
            <NavLink href="#home" theme="dark" active>
                Home
            </NavLink>
            <NavLink href="#portfolio" theme="dark">
                Portfolio
            </NavLink>
            <NavLink href="#services" theme="dark">
                Services
            </NavLink>
            <NavLink href="#contact" theme="dark">
                Contact
            </NavLink>
        </div>
    ),
    parameters: {
        backgrounds: { default: 'dark' },
    },
};
