import styled from 'styled-components';
import { FontColor } from '../../constants/style.constant';
import { ReactSVG } from 'react-svg';
import { ButtonColor } from '../Button/Button.style';

export type CardTypes = {
    variant?: 'Default' | 'Transparent';
    size?: 'Small' | 'Large';
    margin?: string;
    padding?: string;
    height?: string;
    width?: string;
};

export const CardContainer = styled.div<CardTypes>`
    background: ${ ButtonColor.DEFAULT };
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid transparent;
    
    display: flex;
    flex-direction: row;
    
    margin: ${props => props.margin || 0};
    padding: ${props => props.padding || '2rem'};
    
    height: ${ props => props.padding || 'initial' };
    width: ${ props => props.padding || 'initial' };

    &:hover {
        border-color: ${ButtonColor.ACTIVE};
    }
`;