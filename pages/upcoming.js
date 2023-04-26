import Head from "next/head";
import { Container } from "../src/styles/Global.style.tsx";
import { Upcoming } from '../src/views/Upcoming/Upcoming.view';

export default function UpcomingPage() {
  return (
    <>
      <Head>
        <title>Upcoming</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>

      <Container>
        <Upcoming />
      </Container>
    </>
  );
}
