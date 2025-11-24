import type { Meta, StoryObj } from '@storybook/react';
import Grid from './Grid';
import Card from './Card';

const meta = {
    title: 'Design System/Grid',
    component: Grid,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        gap: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl'],
        },
    },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoCard = ({ number }: { number: number }) => (
    <Card padding="md" hover={false} gradient={false}>
        <div className="text-center p-4 bg-orange-100 rounded">
            <span className="text-xl font-medium">Item {number}</span>
        </div>
    </Card>
);

export const ThreeColumns: Story = {
    args: {
        cols: { default: 1, md: 2, lg: 3 },
        gap: 'md',
        children: (
            <>
                <DemoCard number={1} />
                <DemoCard number={2} />
                <DemoCard number={3} />
                <DemoCard number={4} />
                <DemoCard number={5} />
                <DemoCard number={6} />
            </>
        ),
    },
};

export const FourColumns: Story = {
    args: {
        cols: { default: 1, sm: 2, md: 3, lg: 4 },
        gap: 'md',
        children: (
            <>
                <DemoCard number={1} />
                <DemoCard number={2} />
                <DemoCard number={3} />
                <DemoCard number={4} />
                <DemoCard number={5} />
                <DemoCard number={6} />
                <DemoCard number={7} />
                <DemoCard number={8} />
            </>
        ),
    },
};

export const TwoColumns: Story = {
    args: {
        cols: { default: 1, md: 2 },
        gap: 'lg',
        children: (
            <>
                <DemoCard number={1} />
                <DemoCard number={2} />
                <DemoCard number={3} />
                <DemoCard number={4} />
            </>
        ),
    },
};

export const SmallGap: Story = {
    args: {
        cols: { default: 1, md: 3 },
        gap: 'sm',
        children: (
            <>
                <DemoCard number={1} />
                <DemoCard number={2} />
                <DemoCard number={3} />
            </>
        ),
    },
};

export const LargeGap: Story = {
    args: {
        cols: { default: 1, md: 3 },
        gap: 'xl',
        children: (
            <>
                <DemoCard number={1} />
                <DemoCard number={2} />
                <DemoCard number={3} />
            </>
        ),
    },
};
