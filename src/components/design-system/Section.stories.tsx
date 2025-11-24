import type { Meta, StoryObj } from '@storybook/react';
import Section from './Section';
import Container from './Container';

const meta = {
    title: 'Design System/Layout/Section',
    component: Section,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        background: {
            control: 'select',
            options: ['white', 'black', 'gray'],
        },
        padding: {
            control: 'select',
            options: ['none', 'sm', 'md', 'lg', 'xl'],
        },
    },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoContent = () => (
    <Container>
        <h2 className="text-3xl font-light mb-4">Section Content</h2>
        <p className="text-gray-600">This is content inside a section component.</p>
    </Container>
);

export const WhiteBackground: Story = {
    args: {
        background: 'white',
        padding: 'lg',
        children: <DemoContent />,
    },
};

export const BlackBackground: Story = {
    args: {
        background: 'black',
        padding: 'lg',
        children: (
            <Container>
                <h2 className="text-3xl font-light mb-4 text-white">Section Content</h2>
                <p className="text-gray-400">This is content inside a dark section.</p>
            </Container>
        ),
    },
};

export const GrayBackground: Story = {
    args: {
        background: 'gray',
        padding: 'lg',
        children: <DemoContent />,
    },
};

export const SmallPadding: Story = {
    args: {
        background: 'white',
        padding: 'sm',
        children: <DemoContent />,
    },
};

export const LargePadding: Story = {
    args: {
        background: 'white',
        padding: 'xl',
        children: <DemoContent />,
    },
};

export const NoPadding: Story = {
    args: {
        background: 'white',
        padding: 'none',
        children: <DemoContent />,
    },
};
