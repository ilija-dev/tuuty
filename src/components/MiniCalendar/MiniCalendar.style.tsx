import styled from 'styled-components';
import { Color, FontColor } from '../../constants/style.constant';
import { ReactSVG } from 'react-svg';
import { ButtonColor } from '../Button/Button.style';

export type MiniCalendarTypes = {
    variant?: 'Default' | 'Transparent';
    size?: 'Small' | 'Large';
    margin?: string;
    padding?: string;
    height?: string;
    width?: string;
};

export const MiniCalendarContainer = styled.div<MiniCalendarTypes>`
    background: ${ ButtonColor.DEFAULT };
    
    box-sizing: border-box;
    border-radius: 10px;
    
    margin: ${props => props.margin || 0};
    padding: ${props => props.padding || '1rem'};
    
    height: ${ props => props.padding || 'initial' };
    width: ${ props => props.padding || 'initial' };

    height: 400px;
`;

export const DateBox = styled.div`
    text-align: center;
`;

export const DaysBox = styled.div`
    grid-column: 2/7;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    text-align: center;
`;

export const TimesBox = styled.div`
    grid-column: 1;
    grid-row: 2/7;

    display: grid;

    text-align: center;

    > div {
        display: grid;
        height: 100%;
        align-items: center;
    }
`;

export const SelectionsBox = styled.div`
    /* background-color: yellow; */
    grid-column: 2/7;
    grid-row: 2/7;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;

    > div {
        display: grid;
        justify-content: center;

        > div {
            background-color: ${Color.PRIMARY};
            border-radius: 50%;
            height: 44px;
            width: 44px;

            &.available {
                background-color: ${FontColor.DARK_GREEN};
                
                cursor: pointer;

                &:hover {
                    background-color: ${FontColor.GREEN};
                }
            }
        }
    }
`;

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
`;

