import React from "react";
import { useData, IUser } from "../Contexts/index";
import Loading from "../Loading/Loading";
import ListBody from "./ListBody";

const Card: React.FC = () => {
  const context = useData();
  console.log("first render", context.users);

  const getComponent = (user: IUser) => {
    console.log(context.isLoading);
    const { username, email, address, phone, website, company } = user;
    if (context.error !== null) {
      console.log(context.error);
      return;
    }
    if (context.isLoading) {
      return <Loading />;
    }

    return (
      <section id="section-list" key={user.id}>
        <div className="list-title col">
          <div className="row">
            <img
              alt="avatar"
              className="brief__avatar"
              src={"./src/images/avatar.png"}
            />
            <h3>{user.name}</h3>
            <p>{username}</p>
            <a href="#" className="more__icon">
              <img src="./src/images/more.svg" alt="more" />
            </a>
          </div>
          <p>{email}</p>
        </div>
        <ListBody
          value1={address.city}
          value2={phone}
          title1={"Address : "}
          title2={"Phone : "}
        />
        <ListBody
          value1={website}
          value2={company.name}
          title1={"Website :"}
          title2={"Company :"}
        />
      </section>
    );
  };

  return <>{context.users.map((user, index) => getComponent(user))}</>;
};

export default Card;
