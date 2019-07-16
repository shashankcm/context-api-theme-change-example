import React, { useContext } from "react";
import LanguageContext from "./LanguageContext";

const Card = props => {
  const { data } = props;

  const { card } = useContext(LanguageContext).currentLanguageData;

  return (
    <div className="MyCard">
      <div className="img-container">
        <img src={data.img} alt={data.title} />
      </div>
      <h3>{data.title}</h3>
      <div>
        <p>
          <strong>{card.genre}</strong>: {data.genre}
        </p>
        <p>
          <strong>{card.date}</strong>: {data.date}
        </p>
      </div>
      <p className="description">{data.description}</p>
      <a href={data.link}>{card.link}</a>
    </div>
  );
};

export default Card;
