import React from "react";
import { IAddress } from "../Contexts/Interfaces";
type ListBodyProps = {
  value1: string;
  value2: string;
  title1: string;
  title2: string;
};

const ListBody: React.FC<ListBodyProps> = (props) => {
  return (
    <div className="list-body row ">
      <div className="col">
        <h5>{props.title1}</h5>
        <p>{props.value1}</p>
      </div>
      <div className="col">
        <h5>{props.title2}</h5>
        <p>{props.value2}</p>
      </div>
    </div>
  );
};

export default ListBody;
