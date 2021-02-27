import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const Container = styled.div`
    padding: 2rem;
`;

export const Subnav = styled.div`
    display: flex;
    font-weight: 500;
`;

export const SubnavItem = styled(LinkRouter)`
    padding: 1rem 1.5rem 1rem 0;
    cursor: pointer;
`;

export const ItemTxt = styled.p`
    color: #000;
    transition: .2s ease-out;

    &:hover {
        border-bottom: 4px solid #9a0f98;
    }
`;

