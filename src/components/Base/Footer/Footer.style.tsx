import styled from 'styled-components';
import { Size } from '../../../constants/style.constant';

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const Inner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${Size.MAX_WIDTH};
    padding: 0 1.25rem;
`;