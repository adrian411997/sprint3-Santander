import PropTypes from "prop-types";
import "./Table.css";

const Table = ({ title, theads, data }) => {
  return (
    <div className="table">
      <h2>{title}</h2>
      <table role="table">
        <thead>
          <tr>
            {theads.map((th, index) => (
              <th key={index}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr data-testid="row" key={index}>
              <td>{d.categoria}</td>
              <td>${d.ganancias}</td>
              <td>${d.asistencia.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
Table.propTypes = {
  title: PropTypes.string.isRequired,
  theads: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
