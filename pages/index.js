import Head from 'next/dist/shared/lib/head';
import Category from './category';

const Web = () => (
    <>
        <Category />
        <Head>
            <title>Truth or Drink</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
        </Head>
    </>
);

export default Web;
