import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getAllEvents, listOfEvents } from "../../../Redux/Reducers/events";
import "./Details.css";
import { useDispatch, useSelector } from "react-redux";

const Details = () => {
  const dispatch = useDispatch();
  const data = JSON.parse(localStorage.getItem("eventsData"));
  const eventos = useSelector(listOfEvents);
  let params = useParams();
  const [thisEvent, setThisEvent] = useState(null);

  useEffect(() => {
    if (!data) {
      dispatch(getAllEvents());
      localStorage.setItem("eventsData", JSON.stringify(eventos));
    } else {
      setThisEvent(eventos.filter((ev) => ev._id === parseInt(params.id))[0]);
    }
  }, []);

  return (
    <div className="card-space">
      <div className="card-container">
        {thisEvent ? (
          <div className="card-detail" id="card-detail">
            <div className="detail-image">
              <img src={thisEvent.image} />
            </div>
            <div className="detail-words">
              <div className="detail-title">
                <h1>{thisEvent.name}</h1>
              </div>
              <div className="detail-description">
                <p>{thisEvent.description}</p>
              </div>
              <div className="detail-date">
                <p>Date: {thisEvent.date}</p>
              </div>
              <div className="detail-concurrency">
                <p>Capacity: ${thisEvent.capacity} persons</p> Assitance: $
                {thisEvent.assistance}
                <p></p>
              </div>
              <div className="detail-info">
                <div className="detail-place">
                  Lugar: <b>{thisEvent.place}</b>
                </div>
                <div className="detail-price">
                  Precio: <b>${thisEvent.price}</b>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Details;
