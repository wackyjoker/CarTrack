import { Context } from "mocha";
import React, { useContext, useState, useEffect } from "react";
import { IAddress, ICompany } from "./Interfaces";

export type IUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: IAddress;
  phone: string;
  website: string;
  company: ICompany;
};

export type IContext = {
  users: Array<IUser>;
  isLoading: boolean;
  error: string | null;
};

export const useData = () => useContext(Contexts);

export const Provider: React.FC = ({ children }) => {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      await fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setUsers(res);
          console.log(res);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setIsLoading(false);
        });
    };
  }, []);
  return (
    <Contexts.Provider value={{ users, isLoading, error }}>
      {children}
    </Contexts.Provider>
  );
};
const Contexts = React.createContext<IContext>(null);
