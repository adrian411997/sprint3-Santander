import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/utilities/Header/Header";
import Layout from "../components/utilities/layout/Layout";
import Welcome from "../components/utilities/Welcome/Welcome";
import Footer from "../components/utilities/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

describe("Header", () => {
  beforeEach(() => {
    // Simula un cambio de scroll antes de cada prueba
    global.scrollY = 100;
    fireEvent.scroll(window);
  });
  test("renderiza el componente Header sin errores", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    // Asegúrate de que el componente se renderiza correctamente
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });

  test("muestra u oculta el menú al hacer clic en el icono", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    // Simula el evento de clic en el icono del menú
    const iconoMenu = screen.getByRole("responsive");
    fireEvent.click(iconoMenu);

    // Asegúrate de que la clase "show" se agrega al headerLinks
    const headerLinksElement = screen.getByTestId("headerLinks");
    expect(headerLinksElement).toHaveClass("show");

    // Haz clic nuevamente para ocultar el menú
    fireEvent.click(iconoMenu);

    // Asegúrate de que la clase "show" se elimina del headerLinks
    expect(headerLinksElement).not.toHaveClass("show");
  });
});
