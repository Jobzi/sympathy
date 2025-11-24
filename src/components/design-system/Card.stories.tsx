import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta = {
    title: 'Design System/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        hover: {
            control: 'boolean',
        },
        gradient: {
            control: 'boolean',
        },
        padding: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg'],
        },
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        hover: true,
        gradient: true,
        padding: 'md',
        children: (
            <div>
                <h3 className="text-2xl font-light mb-4">Card Title</h3>
                <p className="text-gray-600">
                    This is a card component with hover effects and gradient animation.
                </p>
            </div>
        ),
    },
};

export const WithoutHover: Story = {
    args: {
        hover: false,
        gradient: false,
        padding: 'md',
        children: (
            <div>
                <h3 className="text-2xl font-light mb-4">Static Card</h3>
                <p className="text-gray-600">
                    This card has no hover effects or gradient.
                </p>
            </div>
        ),
    },
};

export const SmallPadding: Story = {
    args: {
        hover: true,
        gradient: true,
        padding: 'sm',
        children: (
            <div>
                <h3 className="text-xl font-light mb-2">Small Padding</h3>
                <p className="text-gray-600 text-sm">Compact card with small padding.</p>
            </div>
        ),
    },
};

export const LargePadding: Story = {
    args: {
        hover: true,
        gradient: true,
        padding: 'lg',
        children: (
            <div>
                <h3 className="text-2xl font-light mb-4">Large Padding</h3>
                <p className="text-gray-600">Spacious card with large padding.</p>
            </div>
        ),
    },
};
