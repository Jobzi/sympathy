import type { Meta, StoryObj } from '@storybook/react';
import FeatureList from './FeatureList';

const meta = {
    title: 'Design System/FeatureList',
    component: FeatureList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        bulletColor: {
            control: 'select',
            options: ['primary', 'white', 'black'],
        },
        align: {
            control: 'select',
            options: ['left', 'center', 'right'],
        },
    },
} satisfies Meta<typeof FeatureList>;

export default meta;
type Story = StoryObj<typeof meta>;

const photographyFeatures = [
    'Sesiones de Retrato',
    'Fotografía de Bodas',
    'Sesiones Comerciales',
    'Fotografía de Moda',
    'Fotografía de Productos',
];

export const Centered: Story = {
    args: {
        items: photographyFeatures,
        bulletColor: 'primary',
        align: 'center',
    },
};

export const LeftAligned: Story = {
    args: {
        items: photographyFeatures,
        bulletColor: 'primary',
        align: 'left',
    },
};

export const RightAligned: Story = {
    args: {
        items: photographyFeatures,
        bulletColor: 'primary',
        align: 'right',
    },
};

export const WhiteBullets: Story = {
    args: {
        items: [
            'Películas de Bodas',
            'Videos Corporativos',
            'Videos Musicales',
            'Cobertura de Eventos',
        ],
        bulletColor: 'white',
        align: 'center',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};

export const ShortList: Story = {
    args: {
        items: ['Opción 1', 'Opción 2', 'Opción 3'],
        bulletColor: 'primary',
        align: 'center',
    },
};
