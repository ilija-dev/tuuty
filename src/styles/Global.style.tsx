import styled from 'styled-components';
import { Color, FontColor } from '../constants/style.constant';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 0;
  background-color: ${Color.PRIMARY};
  color: ${FontColor.DEFAULT};
`;