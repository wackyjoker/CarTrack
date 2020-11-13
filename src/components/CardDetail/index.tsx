import React from "react";
import { Link, useParams } from "react-router-dom";
import { useData } from "../Contexts/index";
import Loading from "../Loading/Loading";
import ListBody from "../CardList/ListBody";
const CardDetail = () => {
  const context = useData();
  const { userid } = useParams<{ userid: string }>();
  const userID = parseInt(userid);
  const { ...user } = context.users[userID];
  const { id, address } = user;

  if (context.isLoading) {
    return <Loading />;
  }

  return (
    <section id="section-list" key={id}>
      <div className="list-title col">
        <div className="row">
          <img alt="avatar" className="brief__avatar" src={"./src/images/avatar.png"} />
          <h3>{user.name}</h3>
          <p>{user.username}</p>
          <Link to={`/${user.id}`} className="more__icon">
            <img src="./src/images/more.svg" alt="more" />
          </Link>
        </div>
        <p>{user.email}</p>
      </div>
      {/* <ListBody value1={user.address.city} value2={user.phone} title1={"Address : "} title2={"Phone : "} />
      <ListBody
        value1={<a href={user.website}>{user.website}</a>}
        value2={user.company.name}
        title1={"Website : "}
        title2={"Company : "}
      /> */}
    </section>
  );
};

export default CardDetail;
