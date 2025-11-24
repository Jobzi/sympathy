import type { Meta, StoryObj } from '@storybook/react';
import ImageCard from './ImageCard';

const meta = {
    title: 'Design System/ImageCard',
    component: ImageCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        aspectRatio: {
            control: 'select',
            options: ['square', 'portrait', 'landscape', 'video'],
        },
        overlay: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof ImageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Portrait: Story = {
    args: {
        image: 'https://images.pexels.com/photos/1560303/pexels-photo-1560303.jpeg',
        alt: 'Wedding photography',
        category: 'Bodas',
        title: 'Historias de amor eternas',
        aspectRatio: 'portrait',
        overlay: true,
    },
    parameters: {
        layout: 'padded',
    },
};

export const Square: Story = {
    args: {
        image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg',
        alt: 'Portrait photography',
        category: 'Retratos',
        title: 'Belleza natural',
        aspectRatio: 'square',
        overlay: true,
    },
    parameters: {
        layout: 'padded',
    },
};

export const Landscape: Story = {
    args: {
        image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg',
        alt: 'Commercial photography',
        category: 'Comercial',
        title: 'Brand Excellence',
        aspectRatio: 'landscape',
        overlay: true,
    },
    parameters: {
        layout: 'padded',
    },
};

export const WithoutOverlay: Story = {
    args: {
        image: 'https://images.pexels.com/photos/2887718/pexels-photo-2887718.jpeg',
        alt: 'Fashion photography',
        category: 'Fashion',
        title: 'Estilo y Gracia',
        aspectRatio: 'portrait',
        overlay: false,
    },
    parameters: {
        layout: 'padded',
    },
};

export const VideoAspect: Story = {
    args: {
        image: 'https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg',
        alt: 'Video production',
        category: 'Video',
        title: 'Historias de cine',
        aspectRatio: 'video',
        overlay: true,
    },
    parameters: {
        layout: 'padded',
    },
};
