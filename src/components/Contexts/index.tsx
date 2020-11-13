import React, { useContext, useState, useEffect } from "react";
import { IAddress, ICompany } from "./Interfaces";

type HandleSearch = (e: string) => void;

export type IUser = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
};

export type IContext = {
  users: Array<IUser>;
  isLoading: boolean;
  handleSearch: HandleSearch;
  filteredList: Array<IUser>;
  searchOption: HandleSearch;
};
export const Contexts = React.createContext<IContext>(null);
export const useData = () => useContext(Contexts);

export const Provider: React.FC = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("name");

  const filteredList = users.filter((user: any) => {
    const result: string = user[option];
    return result.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase());
  });

  const handleSearch = (e: string) => {
    setSearch(e);
  };

  const searchOption = (e: string) => {
    setOption(e);
  };

  useEffect(() => {
    const getData = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      await fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setUsers((prevState) => res);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    };
    getData();
  }, []);
  return (
    <Contexts.Provider value={{ users, isLoading, handleSearch, filteredList, searchOption }}>
      {children}
    </Contexts.Provider>
  );
};
