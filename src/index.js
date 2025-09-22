import React from 'react';
import App from "./App.jsx";
import { getImages, results } from "./settings/data.js";
import ReactDOM from 'react-dom/client';

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App getImages={getImages} results={results} />
  </React.StrictMode>
);
