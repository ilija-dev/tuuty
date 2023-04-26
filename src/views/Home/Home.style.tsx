import styled from 'styled-components';
import { FontColor, Size } from '../../constants/style.constant';

export const HomeContainer = styled.section`
    height: 100%;
    width: 100%;
    max-width: ${Size.MAX_WIDTH};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Inner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 1em;
    box-sizing: border-box;
    padding: 0 20px;
    height: calc( 100% - 69px );
    width: 100%;
`;

export const Left = styled.div`
    width: 100%;
    max-width: 550px;
    margin-right: 2rem;
`;

export const Right = styled.div``;

export const Title = styled.h3`
    font-size: 2.5em;
    text-transform: uppercase;
    margin: 1rem 0 3rem;
    color: ${ FontColor.GREEN };
    /* font-family: 'UbuntuBold'; */
    font-weight: 600;
`;