import React from "react";
import { useData, IUser } from "../Contexts/index";

const Card: React.FC = () => {
  const context = useData();

  console.log(context.users);
  const getComponent = (user: IUser) => {
    if (context.error) {
      return <div>{context.error}</div>;
    }
    if (context.isLoading) {
      return <div>{context.isLoading}</div>;
    }

    return <div key={user.id}>{user.name}</div>;
  };

  return <>hello world {/*context.users.map((user) => getComponent(user))*/}</>;
};

export default Card;
