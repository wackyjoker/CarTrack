import React from "react";
import { Link, useParams } from "react-router-dom";
import { useData, IUser } from "../Contexts/index";
import Loading from "../Loading/Loading";
import ListBody from "../CardList/ListBody";
import Map from "./map";

const CardDetail = () => {
  const context = useData();
  const { userid } = useParams<{ userid: string }>();
  const userID = parseInt(userid) - 1;
  const { ...user } = context.users[userID];

  if (context.isLoading) {
    return <Loading />;
  }
  const getComponent = (user: IUser) => {
    const { id, name, username, email, address, phone, website, company } = user;
    const { lat, lng } = address.geo;
    return (
      <section id="section-list" key={id}>
        <div className="list-title col list-col">
          <div className="row">
            <img alt="avatar" className="brief__avatar" src={"./src/images/avatar.png"} />
            <div className="col">
              <h3>{name}</h3>
              <p>{email}</p>
            </div>
            <p>{username}</p>
            <Link to={`/`} className="more__icon">
              <img src="./src/images/back.svg" alt="more" />
            </Link>
          </div>
        </div>
        <ListBody
          value1={<a href={`http://${website}`}>{website}</a>}
          value2={phone}
          title1={"Website : "}
          title2={"Phone : "}
        />

        <div className="detail-body row">
          <div className="col">
            Street : <p>{address.street}</p>
            ZIP : <p>{address.zipcode}</p>
          </div>
          <div className="col">
            Suite : <p>{address.suite}</p>
            City : <p>{address.city}</p>
          </div>
        </div>
        <div className="detail-body row">
          {/* <GoogleMap defaultZoom={10} defaultCenter={{ lat: `${address.geo.lat}`, lng: `${address.geo.lng}` }} /> */}
          <Map lat={parseFloat(lat)} lng={parseFloat(lng)} />
        </div>
        <div className="detail-body col detail-companyContainer">
          <div className="row detail-company">
            Company: <p>{company.name}</p>
          </div>
          <div className="row company-spans">
            Catch Phrase :
            {company.catchPhrase.split(" ").map((v) => (
              <span>{v}</span>
            ))}
          </div>
          <div className="row company-spans">
            BS:{" "}
            {company.bs.split(" ").map((v) => (
              <span>{v}</span>
            ))}
          </div>
        </div>
      </section>
    );
  };
  return <>{getComponent(user)}</>;
};

export default CardDetail;
