import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Pie from '../components/cake/pie';
export default {
    title: 'Pie chart',
    component: Pie,
} as Meta;

interface ICake {
    properties: {
        name: string;
        value: number;
        color: string;
    }[];
}
const Template: Story<ICake> = (args: ICake) => <Pie {...args} />;
export const CakeLegend = Template.bind({});

CakeLegend.args = {
    properties: [
        {
            name: 'b2c',
            value: 30,
            color: '#ff0000',
        },
        {
            name: 'b2c',
            value: 300,
            color: '#fffb00',
        },
        {
            name: 'c2c',
            value: 30,
            color: '#36196b',
        },
        {
            name: 'c2b',
            value: 50,
            color: '#583838',
        },
    ],
};
