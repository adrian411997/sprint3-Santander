import { useState, useEffect } from "react";
import { boxes } from "../Links";
import "./Filters.css";
import PropTypes from "prop-types";
import { getAllEvents, listOfEvents } from "../../../Redux/Reducers/events";
import Cards from "../../utilities/cards/Cards";
import { useDispatch, useSelector } from "react-redux";

const Filters = ({ xporFecha, indic }) => {
  const dispatch = useDispatch();
  const eventos = useSelector(listOfEvents);
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
    console.log(filteredData);
  };

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  useEffect(() => {
    if (eventos.length > 0) {
      applyFilters();
    } else {
      console.log("no hay nada we");
    }
  }, [eventos, selectedCategories, selectedCategory, input]);
  return (
    <div className="contentMain">
      <div className={"contentButton"}>
        <div className={"contentButtonContainer"}>
          <div className={"contentBoxs"}>
            {boxes.map((b, index) => (
              <div className={"checkBoxes"} key={index}>
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
          <div className={"selectResponsive"}>
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
          <div className={"searchBar"}>
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
      <div className={"cardsSpace"}>
        <div className={"cardsContainer"}>
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
