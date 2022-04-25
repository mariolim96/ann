import React from 'react';
import Header from '../components/header';
import Info from '../components/cake/info';
interface Props {}
const p = {
    title: 'Cake',
    properties: [
        {
            name: 'b2c',
            value: 30,
            color: '#ff0000',
        },
    ],
};
const homepage = (props: Props) => {
    return (
        <>
            <Header />;
            <Info {...p} />
        </>
    );
};

export default homepage;
