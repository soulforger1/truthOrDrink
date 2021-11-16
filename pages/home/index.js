import Head from 'next/head'

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                <h1 className="text-6xl font-bold">
                    Welcome to{' '}
                    <a className="text-blue-600">
                        Truth or Drink
                    </a>
                </h1>
            </main>

            <footer className="flex items-center justify-center w-full h-10 border-t">
                <h1 className="text-2xl font-bold">
                    Powered by KHez
                </h1>
            </footer>
        </div>
    )
}

export default Home;