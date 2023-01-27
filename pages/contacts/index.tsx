import Head from 'next/head';
import Heading from '../components/Heading';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { FC } from 'react';
import { contactType } from '../../types';

type contactsProps = {
  contacts: [contactType];
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { contacts: data },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

const Contacts: FC<contactsProps> = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text={'Contacts list'} />
      <ul>
        {contacts &&
          contacts.map(({ id, name }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>{name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contacts;
