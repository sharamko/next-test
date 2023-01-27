import Heading from './Heading';
import { contactType } from '../../types';
import { FC } from 'react';

type ContactInfoProps = {
  contact: contactType;
};

const ContactInfo: FC<ContactInfoProps> = ({ contact }) => {
  const { name, adress, email } = contact || {};
  const { street, suite, city, zipcode } = adress || {};

  if (!contact) {
    return <Heading tag="h3" text="Empty contact" />;
  }
  return (
    <>
      <Heading tag="h3" text={name} />
      <div>
        <strong>Email:</strong> {email}
      </div>
      <div>
        <strong>Adress:</strong> {`${street},${suite},${city},${zipcode}`}
      </div>
    </>
  );
};

export default ContactInfo;
