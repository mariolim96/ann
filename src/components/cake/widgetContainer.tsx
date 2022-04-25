import React from 'react';
import styled from 'styled-components';
import { IInfo } from '../../types/components/widget.type';
import { Info, Pie } from './index';
const Widget = ({ title, properties }: IInfo) => {
    return (
        <Container>
            <Pie {...{ properties }} />
            <Info {...{ title, properties }} />
        </Container>
    );
};
const Container = styled.div`
    width: minMax(100px, 150px);
    min-height: 150px;
    display: flex;
    align-content: flex-start;
    justify-content: space-around;
`;

export default Widget;
