import React from 'react';
import styled from 'styled-components';
import { IInfo } from '../../types/components/widget.type';

const Info = ({ title, properties }: IInfo) => {
    const values = properties.map((property) => (
        <Wrapper>
            <div>
                <Infos>{property.value}</Infos>
            </div>
            <div>
                <Box color={property.color}></Box>
            </div>
            <div>
                <Infos>{property.name}</Infos>
            </div>
        </Wrapper>
    ));
    return (
        <Container>
            <InfoContainer>
                <Title>{title}</Title>
            </InfoContainer>
            {values}
        </Container>
    );
};
const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: ' . title title ';
`;
const Container = styled.div`
    width: 6.813rem;
    min-width: fit-content;
    min-height: 5.5rem;
`;
const Wrapper = styled.div`
    display: grid;
    justify-content: flex-start;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'info info info';
`;
const Title = styled.h1`
    grid-area: title;
    display: block;
    font-size: 1.2rem;
    padding-left: auto;
    padding-right: auto;
    margin: 0;
`;
const Infos = styled.h2`
    font-size: 1.2rem;
    color: #000;
    grid-area: info;
    margin: 0.25em;
`;

interface Ibox {
    color?: string;
}
const Box = styled.div<Ibox>`
    width: 15px;
    grid-area: info;
    height: 15px;
    background-color: ${(props) => (props.color ? props.color : 'transparent')};
`;

export default Info;
