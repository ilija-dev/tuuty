import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import { FontColor, Size } from '../../../constants/style.constant';

export const HeaderContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 20px;

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

export const Left = styled.div`
    
`;

export const List = styled.ul`
    display: flex;
    margin-right: 3rem;
`;

export const ListIcon = styled(ReactSVG)`
    margin-right: 1rem;
    fill: white;

    > div { display: flex; }
`;

export const Logo = styled(ReactSVG)`
    margin-right: 1rem;
    fill: white;
    cursor: pointer;

    &:hover {
        fill: ${FontColor.GREEN};
    }
`;

export const ItemInner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ListText = styled.p`
    text-transform: uppercase;
`;

export const ListItem = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1rem;
    padding: 0 10px;
    cursor: pointer;

    &:first-child {
        margin-left: 0;
    }

    &:hover {
        ${ ListIcon } {
            fill: ${FontColor.GREEN};
        }

        ${ ListText } {
            color: ${FontColor.GREEN};
        }
    }
`;

export const Nav = styled.nav`
`;

export const Right = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;