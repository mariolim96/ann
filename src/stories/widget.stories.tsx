import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Widget from '../components/cake/widgetContainer';
export default {
    title: 'widget',
    component: Widget,
} as Meta;

interface ICake {
    title: string;
    properties: {
        name: string;
        value: number;
        color: string;
    }[];
}
const Template: Story<ICake> = (args: ICake) => <Widget {...args} />;
export const widgetLegend = Template.bind({});

widgetLegend.args = {
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
