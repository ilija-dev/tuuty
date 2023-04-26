import Head from 'next/head'
import { Container } from '../src/styles/Global.style.tsx';
import { Search } from '../src/views/Search/Search.view';

export default function SearchPage() {
  return (
    <>
      <Head>
        <title>Search Teacher</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>

      <Container>
        <Search />
      </Container>
    </>
  )
}