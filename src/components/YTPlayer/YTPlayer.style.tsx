import styled from 'styled-components';
import Image from 'next/image';
import { ReactSVG } from 'react-svg';

export type YTPlayerTypes = {
    margin?: string;
    padding?: string;
    height?: string;
    width?: string;
};

export const YTPlayerContainer = styled.div<YTPlayerTypes>`
    background: transparent;
    border-radius: 10px;
    overflow: hidden;
    background-color: black;
    width: 100%;
    height: 100%;
    max-height: ${props => props.height || '340px'};
`;

export const YTImage = styled(Image)`
    cursor: pointer;
`

export const YTImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const PlayIcon = styled(ReactSVG)`
    position: absolute;
    z-index: 2;
    cursor: pointer;
`