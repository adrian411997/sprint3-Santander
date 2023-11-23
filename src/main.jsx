import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";

import AOSWrapper from "./components/utilities/aos/AOSWrapper.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AOSWrapper>
    <Provider store={store}>
      <App />
    </Provider>
  </AOSWrapper>
);
