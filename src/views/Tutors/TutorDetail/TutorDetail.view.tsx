import { TutorDetailContainer } from "./TutorDetail";
import { TutorDetailViewModel } from './TutorDetail.viewmodel'
import React from "react";
import { FC } from "react";
import { observer } from 'mobx-react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from "typedi";
import { Header } from "../../../components/Base/Header/Header";

export const TutorDetail: FC = observer( () => {

  const TutorDetailVM = Container.get(TutorDetailViewModel);

  return (
    <>
      <ToastContainer />
      <Header />
      <TutorDetailContainer>

        { TutorDetailVM.title }
      
      </TutorDetailContainer>
    </>
  )

} );