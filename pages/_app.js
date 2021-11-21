import 'tailwindcss/tailwind.css';
import '../components/card/cardStyle.css';
import '../styles/main.css';
import { CategoryProvider } from '../context/categoryContext';

function MyApp({ Component, pageProps }) {
    return (
        <CategoryProvider>
            <Component {...pageProps} />
        </CategoryProvider>);
}

export default MyApp;
