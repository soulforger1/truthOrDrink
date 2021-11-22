import 'tailwindcss/tailwind.css';
import '../styles/main.css';
import { CategoryProvider } from '../context/categoryContext';

function MyApp({ Component, pageProps }) {
    return (
        <CategoryProvider>
            <Component {...pageProps} />
        </CategoryProvider>
    );
}

export default MyApp;
