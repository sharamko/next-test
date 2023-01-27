import '@/styles/globals.scss';
import Layout from './components/Layout';
import { AppProps } from 'next/app';

const myApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
};

export default myApp;
