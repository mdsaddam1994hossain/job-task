import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppRoutes from "./routes/AppRoutes";
import Layout from "./pages/layout/Layout";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
