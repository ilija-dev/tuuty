import Head from "next/head";
import { Container } from "../src/styles/Global.style.tsx";
import { Stream } from '../src/views/Stream/Stream.view';

export default function StreamPage() {
  return (
    <>
      <Head>
        <title>Stream</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>

      <Container>
        <Stream />
      </Container>
    </>
  );
}
