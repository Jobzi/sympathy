import type { Meta, StoryObj } from '@storybook/react';
import SectionHeading from './SectionHeading';

const meta = {
    title: 'Design System/SectionHeading',
    component: SectionHeading,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        theme: {
            control: 'select',
            options: ['light', 'dark'],
        },
        align: {
            control: 'select',
            options: ['left', 'center', 'right'],
        },
    },
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
    args: {
        title: 'Nuestro',
        highlight: 'Servicios',
        subtitle: 'Ofrecemos soluciones visuales integrales adaptadas a sus necesidades',
        theme: 'light',
        align: 'center',
    },
};

export const DarkTheme: Story = {
    args: {
        title: 'Nuestro',
        highlight: 'Trabajo',
        subtitle: 'Explore nuestra variada colección de narraciones visuales',
        theme: 'dark',
        align: 'center',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};

export const LeftAligned: Story = {
    args: {
        title: 'Sobre',
        highlight: 'Nosotros',
        subtitle: 'Conoce más sobre nuestro equipo y filosofía',
        theme: 'light',
        align: 'left',
    },
};

export const RightAligned: Story = {
    args: {
        title: 'Nuestro',
        highlight: 'Proceso',
        subtitle: 'Descubre cómo trabajamos en cada proyecto',
        theme: 'light',
        align: 'right',
    },
};

export const WithoutSubtitle: Story = {
    args: {
        title: 'Portfolio',
        highlight: 'Destacado',
        theme: 'light',
        align: 'center',
    },
};

export const WithoutHighlight: Story = {
    args: {
        title: 'Galería Completa',
        subtitle: 'Todos nuestros trabajos en un solo lugar',
        theme: 'light',
        align: 'center',
    },
};
