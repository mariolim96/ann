import styled from 'styled-components';
const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 0.8rem;
    background-color: ${(props) => props.theme.color.lightrose};
`;
const Logo = styled.a``;
const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    justify-content: space-around;
    align-content: center;
`;
const ListItem = styled.li`
    color: ${(props) => props.theme.color.black};
    font-size: ${(props) => props.theme.text.size.l};
    font-weight: 700;
`;
const Breadcrumb = styled.button`
    cursor: pointer;
    width: 25px;
    height: 25px;
    line-height: ${(props) => props.theme.text.sizL.xl};
    background: none;
    border: none;
    color: ${(props) => props.theme.color.black};
    font-size: ${(props) => props.theme.text.size.xl};
    font-weight: 900;
    &.closed {
        width: 0;
        height: 0;
        opacity: 0;
    }
    &.open {
        width: 25px;
        height: 25px;
        opacity: 1;
    }
`;
const Line = styled.div`
    width: 100%;
    height: 4px;
    background: ${(props) => props.theme.color.black};
    border-radius: 5px;
    transition: all ease-in-out 0.2s;
    &:before,
    :after {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        background: ${(props) => props.theme.color.black};
        border-radius: 5px;
        transition: all ease-in-out 0.5s;
    }
    &:before {
        transform: translateY(-10px);
    }
    &:after {
        transform: translateY(10px);
    }
    &.open {
        /* transform: translateX(-25px); */
        background: transparent;
    }
    &.open::before {
        transform: rotate(45deg);
    }
    &.open::after {
        transform: rotate(-45deg);
    }
`;
const ButtonContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 25px;
    height: 25px;
`;
// const AnimatedIcon = styled.button`
//     cursor: pointer;
//     height: 25px;
//     margin: 0;
//     .icon1::
//     /* position: relative; */

//     `;
// const AnimatedSpan = styled.span`
//     border-radius: 9px;
//     display: block;
//     height: 3px;
//     /* left: 0; */
//     opacity: 1;
//     /* position: absolute; */
// `;
export { HeaderContent, Logo, List, ListItem, Breadcrumb, ButtonContainer, Line };
