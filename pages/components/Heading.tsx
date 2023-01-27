import { FC } from 'react';

type headingProps = {
  tag?: string;
  text: string;
};

const Heading: FC<headingProps> = ({ tag, text }) => {
  const Tag: any = tag || 'h1';
  return <Tag>{text}</Tag>;
};

export default Heading;
