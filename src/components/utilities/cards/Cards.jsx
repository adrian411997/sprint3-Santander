import PropTypes from "prop-types";
import style from "./Cards.module.css";
import { Link } from "react-router-dom";

const Cards = ({ image, name, description, id }) => {
  return (
    <div data-aos="fade-up" className={style.card}>
      <div className={style.imgCard}>
        <img src={image} />
      </div>
      <div className={style.cardSummaryContent}>
        <div className={style.cardSummary}>
          <div className={style.cardTitle}>
            <h2>{name}</h2>
          </div>
          <div className={style.cardDescription}>
            <p>{description}</p>
          </div>
          <div className={style.linkToDetail}>
            <Link to={`/detail/${id}`}>Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
Cards.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Cards;
