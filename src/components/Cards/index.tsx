import React from "react";
import { useData, IUser } from "../Contexts/index";
import Loading from "../Loading/Loading";

const Card: React.FC = () => {
  const context = useData();
  console.log("first render", context.users);

  const getComponent = (user: IUser) => {
    console.log(context.isLoading);
    const {
      id,
      name,
      username,
      email,
      address,
      phone,
      website,
      company,
    } = user;
    if (context.error !== null) {
      console.log(context.error);
      return;
    }
    if (context.isLoading) {
      return <Loading />;
    }

    return (
      <section id="section-list" key={id}>
        <div className="list-title col">
          <div className="row">
            <img
              alt="avatar"
              className="brief__avatar"
              src={"./src/images/avatar.png"}
            />
            <h3>{name}</h3>
            <p>{username}</p>
          </div>
          <p>{email}</p>
        </div>
        <div className="row list-body">
          <div className="col">
            <h5>Location :</h5>
            <p>{address.city}</p>
          </div>
          <div className="col">
            <h5>Phone :</h5>
            <p>{phone}</p>
          </div>
        </div>
        <div className="row list-body">
          <div className="col">
            <h5>WebSite : </h5>
            <p>{website}</p>
          </div>
          <div className="col">
            <h5>Company :</h5>
            <p>{company.name}</p>
          </div>
        </div>
      </section>
    );
  };

  return <>{context.users.map((user) => getComponent(user))}</>;
};

export default Card;
