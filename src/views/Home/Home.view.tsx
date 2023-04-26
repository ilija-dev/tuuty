import { HomeContainer, Inner, Left, Right, Title } from "./Home.style";
import React from "react";
import { FC } from "react";
import { observer } from "mobx-react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../../components/Button/Button";
//import { Web3Service } from "../../utils/web3.service";
import Container from "typedi";
import { HomeViewModel } from "./Home.viewmodel";
import { ReactSVG } from "react-svg";
import introduction from "../../assets/images/introduction.svg";
import { Footer } from "../../components/Base/Footer/Footer";
import { Header } from "../../components/Base/Header/Header";
import router from "next/router";

import { SuperFluid } from "../../utils/superfluid.service";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

export const Home: FC = observer(() => {
  const homeVM = Container.get(HomeViewModel);

  return (
    <HomeContainer>
      <ToastContainer />
      <Header />
      <Inner>
        <Left>
          <p>WEB3 LANGUAGE EDUCATION PLATFORM</p>
          <Title>LEARN YOUR DESIRED LANGUAGE!</Title>
          <p>
            Tuuty is a Web3 related language tutoring website. We aim to move
            projects from web2 to a new and better environment, where people can
            sign in anonymously and have tutoring sessions to improve their
            language skills.
          </p>
          <Button margin={"3rem 0 0 0"} onClick={() => router.push("/tutors")}>
            {"Get Started"}
          </Button>
        </Left>

        <Right>
          <ReactSVG src={introduction.src} />
        </Right>
      </Inner>
      <Footer />
    </HomeContainer>
  );
});
