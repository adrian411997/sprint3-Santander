import PropTypes from "prop-types";

const Layout = ({ Comp1, Comp2 }) => {
  return (
    <div className="mainContent">
      {Comp1}
      {Comp2}
    </div>
  );
};

Layout.propTypes = {
  Comp1: PropTypes.element.isRequired,
  Comp2: PropTypes.element,
};
export default Layout;
