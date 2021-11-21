import Home from './home';
import Head from 'next/dist/shared/lib/head';
import Category from './category/category';

const Web = () => {
    return (
        <>
            <Category />
            <Home />
            <Head>
                <title>Truth or Drink</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap"
                    rel="stylesheet"
                />
            </Head>
        </>
    );
};

export default Web;
