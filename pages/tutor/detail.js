import Head from "next/head";
import { Container } from "../../src/styles/Global.style.tsx";
import { TutorDetail } from '../../src/views/Tutors/TutorDetail/TutorDetail.view';

export default function TutorDetailPage() {
  return (
    <>
      <Head>
        <title>Tutor Detail</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>

      <Container>
        <TutorDetail />
      </Container>
    </>
  );
}
