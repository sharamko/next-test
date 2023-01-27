import ContactInfo from '../components/ContactInfo';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { contactType } from '../../types';

type contactProps = {
  contact: contactType;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.json();
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { contact: data },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const Contact: FC<contactProps> = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
