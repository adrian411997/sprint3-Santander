import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import whatsapp from "../../../assets/whatsapp.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-space">
        <div className="images-footer">
          <img src={facebook} width="50" height="50" />
          <img src={instagram} width="50" height="50" />
          <img src={whatsapp} width="50" height="50" />
        </div>
        <div className="title-footer">
          <h2>Cohort</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
