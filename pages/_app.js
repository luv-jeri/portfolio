import '../styles/globals.css';
import { ThemeProvider } from '../context/Theme.context';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
