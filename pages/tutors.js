import Head from "next/head";
import { Container } from "../src/styles/Global.style.tsx";
import { Tutors } from '../src/views/Tutors/Tutors.view';

export default function TutorsPage() {
  return (
    <>
      <Head>
        <title>Tutors</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>

      <Container>
        <Tutors />
      </Container>
    </>
  );
}
