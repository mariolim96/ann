import React, { useState } from 'react';
import { HeaderContent, Logo, Breadcrumb, ListItem, List, ButtonContainer, Line } from './header.styled';
interface Props {}

const Header = (props: Props) => {
    const [isOpen, setisOpen] = useState(true);
    return (
        <header>
            <HeaderContent>
                <Logo>logo</Logo>
                
                <ButtonContainer onClick={() => setisOpen(!isOpen)}>
                    <Line className={`${isOpen ? 'open' : ''}`} />
                </ButtonContainer>
            </HeaderContent>
        </header>
    );
};

export default Header;
