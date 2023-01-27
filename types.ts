export type adressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

export type contactType = {
  id: number;
  name: string;
  email: string;
  adress: adressType;
};

export type postType = {
  id: number;
  title: string;
  body: string;
};

export type socialsType = {
  id: number;
  icon: string;
  path: string;
};
