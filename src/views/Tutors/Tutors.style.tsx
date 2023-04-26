import styled from "styled-components";
import { Color, FontColor, Size } from "../../constants/style.constant";
import Image from 'next/image';
import { CardContainer } from "../../components/Card/Card.style";

export const TutorsContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-top: 120px;
  padding: 0 20px;
  width: 100%;
  height: calc( 100% - 120px );
  max-width: ${Size.MAX_WIDTH};
`;

export const ProfileImage = styled(Image)`
  border-radius: 50%;
  background-color: ${Color.PRIMARY};
`;

export const List = styled.div`
  height: 100%;
  width: 100%;
  max-width: 780px;
  overflow: scroll;
`;

export const ListContainer = styled.div`
  height: fit-content;
  overflow: scroll;

  ${ CardContainer } {
    margin: 0 0 1rem 0;
  }
`;

export const Side = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 20px;
`;

export const Level = styled.p`
  font-size: 14px;
  margin: 10px 0;
  color: ${ FontColor.GREEN }
`;

export const Name = styled.p``;

export const Introduction = styled.p``;

export const Availability = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

export const DetailOverview = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100%;
  margin-left: 20px;
`