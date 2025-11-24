import type { Meta, StoryObj } from '@storybook/react';
import Overlay from './Overlay';

const meta = {
    title: 'Design System/Overlay',
    component: Overlay,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        opacity: {
            control: 'select',
            options: ['light', 'medium', 'dark', 'darker'],
        },
        gradient: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Overlay>;

export default meta;
type Story = StoryObj<typeof meta>;

const ImageBackground = ({ children }: { children: React.ReactNode }) => (
    <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/3379244/pexels-photo-3379244.jpeg)' }}
    >
        {children}
        <div className="absolute inset-0 flex items-center justify-center z-10">
            <h2 className="text-white text-4xl font-light">Overlay Example</h2>
        </div>
    </div>
);

export const Light: Story = {
    args: {
        opacity: 'light',
        gradient: false,
    },
    render: (args) => (
        <ImageBackground>
            <Overlay {...args} />
        </ImageBackground>
    ),
};

export const Medium: Story = {
    args: {
        opacity: 'medium',
        gradient: false,
    },
    render: (args) => (
        <ImageBackground>
            <Overlay {...args} />
        </ImageBackground>
    ),
};

export const Dark: Story = {
    args: {
        opacity: 'dark',
        gradient: false,
    },
    render: (args) => (
        <ImageBackground>
            <Overlay {...args} />
        </ImageBackground>
    ),
};

export const Darker: Story = {
    args: {
        opacity: 'darker',
        gradient: false,
    },
    render: (args) => (
        <ImageBackground>
            <Overlay {...args} />
        </ImageBackground>
    ),
};

export const Gradient: Story = {
    args: {
        gradient: true,
    },
    render: (args) => (
        <ImageBackground>
            <Overlay {...args} />
        </ImageBackground>
    ),
};
