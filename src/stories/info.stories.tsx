import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Info from '../components/cake/info';
import Pie from '../components/cake/pie';
export default {
    title: 'info',
    component: Info,
} as Meta;

interface ICake {
    title: string;
    properties: {
        name: string;
        value: number;
        color: string;
    }[];
}
const Template: Story<ICake> = (args: ICake) => <Info {...args} />;
export const CakeLegend = Template.bind({});

CakeLegend.args = {
    title: 'Cake',
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
