import "./Welcome.css";
import PropTypes from "prop-types";

const Welcome = ({ cn, text }) => {
  return (
    <div data-testid="welcome" className={`welcomeContent ${cn}`}>
      <div className="overlay"></div>
      <div className="welcomeContainer">
        <div className="welcomeDIV">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};

Welcome.propTypes = {
  cn: PropTypes.string.isRequired,
  text: PropTypes.string,
};
export default Welcome;
