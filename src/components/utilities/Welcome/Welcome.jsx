import "./Welcome.css";
import PropTypes from "prop-types";

const Welcome = ({ className, text }) => {
  return (
    <div className={`welcomeContent ${className}`}>
      <div className="overlay"></div>
      <div className="welcomeContainer">
        <div className="welcomeDIV">
          <h1>{text}</h1>
        </div>
      </div>
    </div>
  );
};

Welcome.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string,
};
export default Welcome;
