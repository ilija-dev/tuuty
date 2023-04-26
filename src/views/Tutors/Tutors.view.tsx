import { TutorsContainer, Side, List, Content, Name, ProfileImage, Level, Introduction, Availability, DetailOverview, ListContainer } from "./Tutors.style";
import { TutorsViewModel } from "./Tutors.viewmodel";
import React from "react";
import { FC } from "react";
import { observer } from "mobx-react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../../components/Base/Header/Header";
import { Card } from "../../components/Card/Card";

import TeachersList from './temp/teachers.json'
import { YTPlayer } from "../../components/YTPlayer/YTPlayer";
import Container from "typedi";
import { MiniCalendar } from "../../components/MiniCalendar/MiniCalendar";
import router from "next/router";

interface TutorsViewModelProps {
  viewModel: TutorsViewModel;
}

export const Tutors: FC<TutorsViewModelProps> = observer(() => {

  const vm = Container.get(TutorsViewModel);

  return (
    <>
      <ToastContainer />
      <Header />
      <TutorsContainer>
        <List>
          <ListContainer>
          {
            TeachersList.map( (el: any, index: number) => {
              return (
                <Card key={index} onMouseEnter={ () => vm.setFocusedIndex(index) } onClick={ () => router.push('/upcoming') }>
                    <Side>
                        <ProfileImage src={el.image} alt="person" width={140} height={140} />
                    </Side>
                    <Content>
                        <Name>{el.name}</Name>
                        <Level>{el.level}</Level>
                        <Introduction>{el.intro}</Introduction>
                        <Availability>{el.availability}</Availability>
                    </Content>
                  </Card>
              )
            } )
          }
          </ListContainer>
        </List>
        <DetailOverview>
          <YTPlayer url={TeachersList[vm?.focusedIndex || 0].video} width='600px' height='340px'></YTPlayer>

          <MiniCalendar margin="1rem 0 0 0 " onClick={ () => router.push('/upcoming') } />
        </DetailOverview>
      </TutorsContainer>
    </>
  );
});
