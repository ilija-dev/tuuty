import styled from 'styled-components';

export const StreamContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    box-sizing: border-box;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 500px;
    grid-gap: 1rem;
    margin-bottom: 20px;
`;

export const CamVideo = styled.div`
    width: 100%;
    height: 100%;
    max-width: 500px;
    object-fit: cover;
    background-color: black;
    border-radius: 10px;
    overflow: hidden;

    > video, img {
        height: 100%;
        width: 100%;
    }
`;