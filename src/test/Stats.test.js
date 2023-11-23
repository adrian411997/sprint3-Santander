import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom";

import Table from "../components/utilities/tables/Table";
const table1 = ["Categorias", "Revenue", "Percentage of attendance"];

const objects = [
  { categoria: "Food", ganancias: 0, asistencia: 0 },
  { categoria: "Museum", ganancias: 15500, asistencia: 90.38461538461539 },
  { categoria: "Concert", ganancias: 10000000, asistencia: 100 },
];
describe("Stats", () => {
  test("should tables render", () => {
    render(
      <Router>
        <Table data={objects} title="Titulo" theads={table1} />
      </Router>
    );
    screen.getByText("Titulo");
  });
  test("should number of rows same that array objects length", () => {
    render(
      <Router>
        <Table data={objects} title="Titulo" theads={table1} />
      </Router>
    );
    const tableElement = screen.getByRole("table");
    const rows = tableElement.querySelectorAll("tbody tr");
    expect(rows).toHaveLength(objects.length);
  });
});
