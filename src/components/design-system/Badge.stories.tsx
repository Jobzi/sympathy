import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

const meta = {
    title: 'Design System/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Primary',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        size: 'md',
        children: 'Secondary',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        size: 'md',
        children: 'Outline',
    },
};

export const Small: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        children: 'Small',
    },
};

export const Large: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        children: 'Large',
    },
};

export const CategoryBadges: Story = {
    render: () => (
        <div className="flex gap-2 flex-wrap">
            <Badge variant="primary">Bodas</Badge>
            <Badge variant="primary">Retratos</Badge>
            <Badge variant="primary">Comercial</Badge>
            <Badge variant="outline">Nuevo</Badge>
            <Badge variant="secondary">Popular</Badge>
        </div>
    ),
};
