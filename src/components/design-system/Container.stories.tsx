import type { Meta, StoryObj } from '@storybook/react';
import Container from './Container';

const meta = {
    title: 'Design System/Layout/Container',
    component: Container,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl', 'full'],
        },
        padding: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoContent = () => (
    <div className="bg-orange-100 p-8 rounded text-center">
        <h3 className="text-2xl font-medium mb-2">Container Content</h3>
        <p className="text-gray-600">This content is centered and constrained by the container.</p>
    </div>
);

export const Large: Story = {
    args: {
        size: 'lg',
        padding: true,
        children: <DemoContent />,
    },
};

export const Medium: Story = {
    args: {
        size: 'md',
        padding: true,
        children: <DemoContent />,
    },
};

export const Small: Story = {
    args: {
        size: 'sm',
        padding: true,
        children: <DemoContent />,
    },
};

export const ExtraLarge: Story = {
    args: {
        size: 'xl',
        padding: true,
        children: <DemoContent />,
    },
};

export const FullWidth: Story = {
    args: {
        size: 'full',
        padding: true,
        children: <DemoContent />,
    },
};

export const NoPadding: Story = {
    args: {
        size: 'lg',
        padding: false,
        children: <DemoContent />,
    },
};
