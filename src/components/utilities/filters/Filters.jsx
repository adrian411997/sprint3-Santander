import { useState, useEffect } from "react";
import { boxes } from "../Links";
import style from "./Filters.module.css";
import PropTypes from "prop-types";
import getData from "../../functions/Api";
import Cards from "../../utilities/cards/Cards";

const Filters = ({ xporFecha, indic }) => {
  const [eventos, setEventos] = useState([]);
  const [input, setInput] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]); // Inicialmente, la copia es un array vacío
  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  const applyFilters = () => {
    let updatedFilteredData = [...eventos];

    if (selectedCategories.length > 0) {
      updatedFilteredData = updatedFilteredData.filter((element) =>
        selectedCategories.includes(element.category)
      );
    }

    if (selectedCategory) {
      updatedFilteredData = updatedFilteredData.filter(
        (element) => element.category === selectedCategory
      );
    }

    if (input) {
      updatedFilteredData = updatedFilteredData.filter((element) =>
        element.name.toLowerCase().includes(input.toLowerCase())
      );
    }
    if (xporFecha) {
      updatedFilteredData = xporFecha(updatedFilteredData, indic);
    }
    setFilteredData(updatedFilteredData);
  };

  useEffect(() => {
    getData("https://mindhub-xj03.onrender.com/api/amazing", setEventos);
  }, [setEventos]);

  useEffect(() => {
    applyFilters();
  }, [eventos, selectedCategories, selectedCategory, input]);

  return (
    <div className="contentMain">
      <div className={style.contentButton}>
        <div className={style.contentButtonContainer}>
          <div className={style.contentBoxs}>
            {boxes.map((b, index) => (
              <div className={style.checkBoxes} key={index}>
                <input
                  type="checkbox"
                  value={b.name}
                  onChange={() => {
                    // Manejar cambios en checkboxes
                    if (selectedCategories.includes(b.name)) {
                      setSelectedCategories(
                        selectedCategories.filter((cat) => cat !== b.name)
                      );
                    } else {
                      setSelectedCategories([...selectedCategories, b.name]);
                    }
                  }}
                />
                <label>{b.name}</label>
              </div>
            ))}
          </div>
          <div className={style.selectResponsive}>
            <select
              onChange={(e) => {
                setSelectedCategory(e.target.value);
              }}
            >
              <option value="">Choose a category</option>
              {boxes.map((b, index) => (
                <option key={index} value={b.name}>
                  {b.name}
                </option>
              ))}
            </select>
          </div>
          <div className={style.searchBar}>
            <input
              placeholder="Buscar..."
              className="input-search-bar"
              type="text"
              id="input"
              onChange={onChangeInput}
            />
          </div>
        </div>
      </div>
      <div className={style.cardsSpace}>
        <div className={style.cardsContainer}>
          {filteredData.length > 0 ? (
            filteredData.map((ev, index) => (
              <Cards
                name={ev.name}
                description={ev.description}
                image={ev.image}
                key={index}
                id={ev._id}
              />
            ))
          ) : (
            <h1>No hay nada we</h1>
          )}
        </div>
      </div>
    </div>
  );
};

Filters.propTypes = {
  xporFecha: PropTypes.func,
  indic: PropTypes.bool,
};

export default Filters;
