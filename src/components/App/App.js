import { memo } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Header from "../Header/Header";
import CharacterPage from "../pages/CharacterPage";
import ComicsPage from "../pages/ComicsPage";

export const App = () => {
  return (
    <Router>
      <Header pad={"50px 0 0 0"} display={"flex"} jC={"space-between"} />
      <Routes>
        <Route exact path="/" element={<CharacterPage pad={"50px 0"} />} />
      </Routes>
      <Routes>
        <Route exact path="/comics" element={<ComicsPage />} />
      </Routes>
    </Router>
  );
};

export default memo(App);
