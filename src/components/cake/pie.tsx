import React from 'react';
import styled from 'styled-components';
import { Converter } from '../../hooks/converter';
import { IPie } from '../../types/components/widget.type';

// build a pie chart
const Pie = ({ properties }: IPie) => {
    const { conicEffect, sum } = Converter(properties);
    return (
        <Outer degre={conicEffect}>
            <Inner>{sum}</Inner>
        </Outer>
    );
};
const Outer = styled.div<{ degre: string }>`
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${(props) => props.degre};
`;
const Inner = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #ffffff;
    margin: auto auto;
`;
export default Pie;
