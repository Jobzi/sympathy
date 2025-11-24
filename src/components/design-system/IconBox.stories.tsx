import type { Meta, StoryObj } from '@storybook/react';
import { Camera, Video, Heart, Star, Award } from 'lucide-react';
import IconBox from './IconBox';

const meta = {
    title: 'Design System/IconBox',
    component: IconBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        color: {
            control: 'select',
            options: ['primary', 'white', 'black'],
        },
    },
} satisfies Meta<typeof IconBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        icon: Camera,
        size: 'md',
        color: 'primary',
    },
};

export const Small: Story = {
    args: {
        icon: Heart,
        size: 'sm',
        color: 'primary',
    },
};

export const Large: Story = {
    args: {
        icon: Star,
        size: 'lg',
        color: 'primary',
    },
};

export const White: Story = {
    args: {
        icon: Video,
        size: 'md',
        color: 'white',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};

export const Black: Story = {
    args: {
        icon: Award,
        size: 'md',
        color: 'black',
    },
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex gap-8 items-end">
            <div className="text-center">
                <IconBox icon={Camera} size="sm" color="primary" />
                <p className="text-sm mt-2">Small</p>
            </div>
            <div className="text-center">
                <IconBox icon={Video} size="md" color="primary" />
                <p className="text-sm mt-2">Medium</p>
            </div>
            <div className="text-center">
                <IconBox icon={Heart} size="lg" color="primary" />
                <p className="text-sm mt-2">Large</p>
            </div>
        </div>
    ),
};
