import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5rem;
    margin-top: 1rem;
`;

export const SingleResumen = styled.div`
    width: 9rem;
    height: 12rem;
    border-radius: .5rem;
    box-shadow:
        0 10.6px 15px -27px rgba(0, 0, 0, 0.024),
        0 17.5px 44.3px -27px rgba(0, 0, 0, 0.035),
        0 28.1px 78.9px -27px rgba(0, 0, 0, 0.046),
        0 55px 113px -27px rgba(0, 0, 0, 0.07);

`;