import { Navigate, Route, Router, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

import "@fontsource/atkinson-hyperlegible/400.css";
import "@fontsource/atkinson-hyperlegible/700.css";

import "./css/app.module.css";
import "./css/theme.module.css";

const Home = lazy(() => import("./pages/Home"));

// todo(maximsmol): add https://github.com/dequelabs/axe-core

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate href="/home" />} />
        <Route path="/home" component={Home} />
      </Routes>
    </Router>
  );
}
