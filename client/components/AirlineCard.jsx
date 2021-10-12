import React, { useState, useEffect } from "react";

//String Functions
let processSite = (str) => {
  str = str.replace("https://", "").replace("http://", "");
  str = str.replace("www.", "");
  str = str.split("/");
  return str[0];
};

let processAlliance = (str) => {
  let alliance;
  if (str === "ST") {
    alliance = <p className="card_details_alliance">Sky Team</p>;
  }
  if (str === "OW") {
    alliance = <p className="card_details_alliance">One World</p>;
  }
  if (str === "SA") {
    alliance = <p className="card_details_alliance">Star Alliance</p>;
  }
  if (str === "none") {
    alliance = <p className="card_details_alliance"></p>;
  }

  return alliance;
};

const AirlineCard = (props) => {
  const [url, updateUrl] = useState("");
  //Web site String processing
  let website = processSite(props.airline.site);
  let alliance = processAlliance(props.airline.alliance);

  //Hover Conditional Elements
  const onHover = (
    <div
      className="card_details_description"
      onMouseOut={() => {
        hoverRelease();
      }}
    >
      <p className="card_details_name">{props.airline.name}</p>
      {alliance}
      <p className="card_details_phone">{props.airline.phone}</p>
      <a href={props.airline.site} className="card_details_site">
        {website}
      </a>
    </div>
  );

  const outHover = (
    <div
      className="card_description"
      onMouseOver={() => {
        hoverHandler();
      }}
    >
      <p className="card_details_name">{props.airline.name}</p>
    </div>
  );

  //Hover Hooks
  const [detail, updateDetail] = useState(<></>);
  const [normalState, updateState] = useState(outHover);

  // Hover Handlers
  let hoverHandler = () => {
    updateState(<></>);
    updateDetail(onHover);
  };

  let hoverRelease = () => {
    updateState(outHover);
    updateDetail(<></>);
  };

  return (
    <div className="card">
      <div className="card_details">
        <img
          src={"https://www.kayak.com" + props.airline.logoURL}
          className="card_img"
        />
        {normalState}
        {detail}
      </div>
    </div>
  );
};

export default AirlineCard;
