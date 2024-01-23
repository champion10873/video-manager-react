import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// third-party
import { Provider } from "react-redux";

// scroll bar
// import "./simplebar/dist/simplebar.css";

// apex-chart
import "./assets/third-party/apex-chart.css";
import "./assets/third-party/react-table.css";

// project import
import App from "./App";
import { store } from "./store";

// import { configProvider } from 'contexts/ConfigContext';
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);

// const root = ReactDOM.createRoot(document.getElementById('root'));

// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
