export type IAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
};

export type IGeo = {
  lat: string;
  lng: string;
};

export type ICompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};
