import React, { useState, useEffect } from 'react';
import AirlineCard from './AirlineCard.jsx';
import main from '../main.css';
import loadMore from "../assets/chevron-circle-down-solid.svg"

const AirlineWindow = (props) => {
  let airlines = props.airlines;

  let filterValues = [];

  const [list, newList] = useState([]);
  const [limiter, updateLimit] = useState(16);
  //FILTER ALLIANCE HANDLER
  let filter = (allianceType, checked) => {
    //filter the airlines with specified alliance
    //check if checked is false
    if (checked) {
      filterValues.push(allianceType);
    } else {
      filterValues.splice(filterValues.indexOf(allianceType), 1);
    }
    if (filterValues.length > 0) {
      newList(airlines.filter(airline => {
        for (let i = 0; i < filterValues.length; i++) {
          if (airline.alliance === filterValues[i]) {
            return true;
          }
        }
        return false;
      }));
    } else {
      newList(airlines);
    }

    updateLimit(16);
  }

  let loadHandler = (int) => {
    updateLimit(limiter + 16);
  };

  useEffect(() => {
    newList(airlines);
  }, [airlines]);

  return (
    <section className="dashboard">
      <h1 className="title">Airlines</h1>
      <div className="filter">
        <h5 className="filter_name">Filter by Alliances</h5>
        <form>
          <label className="filter_alliances">
            <input type="checkbox" onClick={(event) => {
              filter(event.target.value, event.target.checked);
            }} className="filter_alliance_name" value="OW" name="Oneworld" />
            Oneworld
          </label>
          <label className="filter_alliances">
            <input type="checkbox" onClick={(event) => {
              filter(event.target.value, event.target.checked);
            }} className="filter_alliance_name" value="ST" name="Sky Team" />
            Sky Team
          </label>
          <label className="filter_alliances">
            <input type="checkbox" onClick={(event) => {
              filter(event.target.value, event.target.checked);
            }} className="filter_alliance_name" value="SA" name="Star Alliance" />
            Star Alliance
          </label>
        </form>
      </div>

      <div className="airline_container">
        {
          list.map((airline, i) => {

            if (i < limiter) {
              return <AirlineCard key={i} airline={airline}></AirlineCard>
            }
          })
        }
      </div>
      <div className="load" onClick={() => {
        loadHandler(limiter);
      }}>
        <img src={loadMore} className="load_icon" />
      </div>

    </section>
  )
};

export default AirlineWindow;