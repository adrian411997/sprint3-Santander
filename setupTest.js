// setupTests.js
import { JSDOM } from "jsdom";

const dom = new JSDOM("<!doctype html><html><body></body></html>");
global.window = dom.window;
global.document = dom.window.document;

beforeAll(() => {
  global.scrollY = 0; // Inicializa la propiedad scrollY
});

afterAll(() => {
  global.window.close(); // Cierra el entorno de jsdom después de las pruebas
});
