import { UpcomingContainer } from "./Upcoming";
import { UpcomingViewModel } from './Upcoming.viewmodel'
import React from "react";
import { FC } from "react";
import { observer } from 'mobx-react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from "typedi";
import { Header } from "../../components/Base/Header/Header";
import router from "next/router";
import { Button } from "../../components/Button/Button";

export const Upcoming: FC = observer( () => {

  const UpcomingVM = Container.get(UpcomingViewModel);

  return (
    <>
      <ToastContainer />
      <Header />
      <UpcomingContainer>

        <Button onClick={ () => router.push('/stream') }>Stream</Button>
      
      </UpcomingContainer>
    </>
  )

} );