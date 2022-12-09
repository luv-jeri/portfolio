import '../styles/globals.css';
import Wrapper from '../components/Wrapper/Wrapper';
import { ThemeProvider } from '../context/Theme.context';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default MyApp;
