import type { Meta, StoryObj } from '@storybook/react';
import Logo from './Logo';

const meta = {
    title: 'Design System/Logo',
    component: Logo,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        showText: {
            control: 'boolean',
        },
        theme: {
            control: 'select',
            options: ['light', 'dark'],
        },
    },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'md',
        showText: true,
        theme: 'dark',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        showText: true,
        theme: 'dark',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};

export const Large: Story = {
    args: {
        size: 'lg',
        showText: true,
        theme: 'dark',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};

export const IconOnly: Story = {
    args: {
        size: 'md',
        showText: false,
        theme: 'dark',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};

export const LightTheme: Story = {
    args: {
        size: 'md',
        showText: true,
        theme: 'light',
    },
};
