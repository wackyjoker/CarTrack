import React from "react";
import { Link } from "react-router-dom";
import { useData, IUser } from "../Contexts";
import Loading from "../Loading";
import ListBody from "./ListBody";

const CardList: React.FC = () => {
  const context = useData();
  if (context.isLoading) {
    return <Loading />;
  }

  return (
    <>
      {context.filteredList.map((user: IUser) => (
        <section id="section-list" key={user.id}>
          <div className="list-title col list-col">
            <div className="row">
              <img alt="avatar" className="brief__avatar" src={"./src/images/avatar.png"} />
              <div className="col">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
              <p>{user.username}</p>
              <Link to={`/${user.id}`} className="more__icon">
                <img src="./src/images/more.svg" alt="more" />
              </Link>
            </div>
          </div>
          <ListBody value1={user.address.city} value2={user.phone} title1={"Address : "} title2={"Phone : "} />
          <ListBody
            value1={<a href={`http://${user.website}`}>{user.website}</a>}
            value2={user.company.name}
            title1={"Website : "}
            title2={"Company : "}
          />
        </section>
      ))}
    </>
  );
};

export default CardList;
