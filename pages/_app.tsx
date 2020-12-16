import '../styles/globals.scss';
import 'semantic-ui-css/semantic.min.css';
import { AppProps } from 'next/dist/next-server/lib/router/router';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
