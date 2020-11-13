import React from "react";
import { Link } from "react-router-dom";
import { useData, IUser } from "../Contexts/index";
import Loading from "../Loading/Loading";
import ListBody from "./ListBody";

const CardList: React.FC = () => {
  const context = useData();

  const getComponent = (user: IUser) => {
    const { username, email, address, phone, website, company } = user;
    if (context.isLoading) {
      return <Loading />;
    }

    return (
      <section id="section-list" key={user.id}>
        <div className="list-title col">
          <div className="row">
            <img alt="avatar" className="brief__avatar" src={"./src/images/avatar.png"} />
            <h3>{user.name}</h3>
            <p>{username}</p>
            <Link to={`/${user.id}`} className="more__icon">
              <img src="./src/images/more.svg" alt="more" />
            </Link>
          </div>
          <p>{email}</p>
        </div>
        <ListBody value1={address.city} value2={phone} title1={"Address : "} title2={"Phone : "} />
        <ListBody
          value1={<a href={website}>{website}</a>}
          value2={company.name}
          title1={"Website : "}
          title2={"Company : "}
        />
      </section>
    );
  };

  return <>{context.filteredList.map((user, index) => getComponent(user))}</>;
};

export default CardList;
