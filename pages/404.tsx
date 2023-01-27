import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Heading from './components/Heading';
import { FC } from 'react';

const Error: FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Heading text={'Error'} />
      <Heading tag={'h2'} text={'Error...'} />
    </>
  );
};

export default Error;
