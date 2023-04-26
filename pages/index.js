import Head from 'next/head'
import { Container } from '../src/styles/Global.style.tsx';
import { Home } from '../src/views/Home/Home.view';

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Main</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>

      <Container>
        <Home />
      </Container>
    </>
  )
}