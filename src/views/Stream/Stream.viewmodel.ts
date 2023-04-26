import { makeObservable, observable } from 'mobx';
import { Service } from 'typedi';
import io from "socket.io-client";
import router from 'next/router';

@Service()
export class StreamViewModel {

  @observable
  socket: any;

  @observable
  streamPayState = false;

  constructor() {
    makeObservable( this );
  }

  setStreamPayState = ( state: boolean ) => this.streamPayState = state;

  async fetchSocket(cam1: any, cam2: any) {
    if( this.socket ) return;
    
    await fetch("/api/v1/stream");

    this.socket = io();
    this.socket.on( 'connect', () => console.log('connected') );

    this.socket.on('onReceiveStream', (data: any) => {
      if( data && cam2.current )
        (cam2.current as HTMLImageElement).src = data.base64Img;
    } );

    this.socket.on('onExitStream', (data: any) => {
      router.push('/upcoming');
    } );

    const stream = await navigator.mediaDevices.getUserMedia( { video: { width: 400, height: 400 } } );

    if( cam1.current )
      (cam1.current as HTMLVideoElement).srcObject = stream;

    setInterval(() => {
      this.socket.emit("onStream", { author: 'Logan', base64Img: this.getFrame(cam1) });
    }, 1000 / 30); // 30 FPS
  }

  getFrame = (cam1: any) => {
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    canvas.style.border = "none";
    const canvas2dContext = canvas.getContext('2d');
    
    if( !canvas2dContext || !cam1.current ) return;

    canvas2dContext.drawImage(cam1.current, 0, 0, 400, 400);

    return canvas.toDataURL('image/png');
  }
}