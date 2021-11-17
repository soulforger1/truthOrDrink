import Home from './home';
import Head from 'next/dist/shared/lib/head';

const Web = () => {
  return (<><Home />
    <Head>
      <title>Truth or Drink</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  </>
  )
}

export default Web;