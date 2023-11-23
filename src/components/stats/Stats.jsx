import { useEffect, useState } from "react";
import dataToTables from "../functions/stats";
import getData from "../functions/Api";
import Table from "../utilities/tables/Table";

const Stats = () => {
  // Estado para almacenar los eventos y los datos de las tablas
  const [eventos, setEventos] = useState(null);
  const [tablesData, setTablesData] = useState(null);
  const table1 = ["Categorias", "Revenue", "Percentage of attendance"];

  useEffect(() => {
    // Verifica si los eventos se encuentran en el almacenamiento local
    const data = JSON.parse(localStorage.getItem("eventsData"));

    if (data) {
      // Si existen en el almacenamiento local, establece los datos directamente
      setEventos(data);
      setTablesData(dataToTables(data));
    } else {
      // Si no existen, realiza la llamada a la API para obtener los datos
      getData("https://mindhub-xj03.onrender.com/api/amazing", (response) => {
        setEventos(response);
        setTablesData(dataToTables(response));
        // Almacena los datos en el almacenamiento local para su uso posterior
        localStorage.setItem("eventsData", JSON.stringify(response));
      });
    }
  }, []);

  return (
    <div className="stats">
      <div className="table-content">
        <div className="table-container">
          <div className="table">
            <h2>Events Statistics</h2>
            <table>
              <thead>
                <tr>
                  <th>Events with the highest percentage of attiendance</th>
                  <th>Events with the lowest percentage of attiendance</th>
                  <th>Event with larger capacity</th>
                </tr>
              </thead>
              <tbody>
                {tablesData === null ? (
                  <h1>No hay datos</h1>
                ) : (
                  <tr>
                    <td>{tablesData.arrayPerc[0].nombre}</td>
                    <td>
                      {
                        tablesData.arrayPerc[tablesData.arrayPerc.length - 1]
                          .nombre
                      }
                    </td>
                    <td>{tablesData.arrayCap[0].name}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="table-container">
          {tablesData === null ? (
            <h1>No hay datos</h1>
          ) : (
            <Table
              title="Upcoming events statistics by category"
              theads={table1}
              data={tablesData.objectsUpcoming}
            />
          )}
        </div>
        <div className="table-container">
          {tablesData === null ? (
            <h1>No hay datos</h1>
          ) : (
            <Table
              title="Past events statistics by category"
              theads={table1}
              data={tablesData.objectsPast}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;
