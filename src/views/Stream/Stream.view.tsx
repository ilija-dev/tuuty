import { StreamContainer, Wrapper, CamVideo } from "./Stream";
import { StreamViewModel } from './Stream.viewmodel'
import React, { useEffect, useRef, useState } from "react";
import { FC } from "react";
import { observer } from 'mobx-react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from "typedi";
import { Header } from "../../components/Base/Header/Header";
import { Button } from "../../components/Button/Button";
import { SuperFluid } from "../../utils/superfluid.service";

const recipient = "0x3516beb62FD21a7795f2e297c43b4FB7B223075e";

export const Stream: FC = observer( () => {

  const streamVM = Container.get(StreamViewModel);
  const superFluid = Container.get(SuperFluid);

  const cam1Ref = useRef(null);
  const cam2Ref = useRef(null);

  useEffect( () => {
    streamVM.fetchSocket(cam1Ref, cam2Ref);
  }, [streamVM] )

  return (
    <>
      <ToastContainer />
      <Header />
      <StreamContainer>

        <Wrapper>
          <CamVideo>
          <video ref={cam1Ref} autoPlay/>
          </CamVideo>
          <CamVideo>
            <img ref={cam2Ref} />
          </CamVideo>
        </Wrapper>

        <Button onClick={ async () => {

            if( streamVM.streamPayState ) {
              await superFluid.deleteFlow( recipient );
              streamVM.setStreamPayState(false);
            } else {
              await superFluid.createNewFlow( recipient, 1000000 ) 
              streamVM.setStreamPayState(true);
            }
          }
        }>{streamVM.streamPayState ? 'Stop' : 'Start'}</Button>
      
      </StreamContainer>
    </>
  )

} );