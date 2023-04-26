import styled from 'styled-components';
import { FontColor } from '../../constants/style.constant';
import { ReactSVG } from 'react-svg';

export const enum ButtonColor {
    DEFAULT = '#1B1C1F',
    HOVER = '#32353F',
    ACTIVE = '#8ED548',
}

export type ButtonTypes = {
    variant?: 'Default' | 'Transparent';
    disabled?: boolean;
    size?: 'Small' | 'Large';
    margin?: string;
};

export const ButtonContainer = styled.button<ButtonTypes>`
    position: relative;
    min-width: 10rem;
    height: 3rem;
    padding: 0 2rem;
    box-sizing: border-box;
    background: ${ ButtonColor.DEFAULT };
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 2rem;
    border: 1px solid transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: ${props => props.margin || 0};

    &:hover {
        border-color: ${ButtonColor.ACTIVE};
    }

    &:active {
        background-color: ${ButtonColor.ACTIVE};
    }
`;

export const Icon = styled(ReactSVG)`
    margin-right: 10px;
`;

export const Text = styled.p`
    color: ${FontColor.DEFAULT};
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: medium;
`;