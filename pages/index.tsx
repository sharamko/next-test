import Head from 'next/head';
import Heading from './components/Heading';
import Image from 'next/image';
import Untitled from '../public/Untitled.jpg';
import Socials from './components/Socials';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import { socialsType } from '../types';

type homeProps = {
  socials: socialsType[];
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`);
    const data = await response.json();
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { socials: data },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const Home: FC<homeProps> = ({ socials }) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text={'Hello Next!'} />
      <Socials socials={socials} />
      <div className="imgDiv">
        <Image
          className="myImg"
          src={Untitled}
          alt="image"
          placeholder="blur"
        />
      </div>
    </>
  );
};

export default Home;
