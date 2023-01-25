import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./Jaeheon/Ch_4.6~4.9/components/App";
import { BucketProvider } from "./Jaeheon/Ch_4.6~4.9/BucketContext";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BucketProvider>
    <App />
  </BucketProvider>
);
