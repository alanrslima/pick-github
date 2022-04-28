import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "../pages/Search/Search";
import User from "../pages/User/User";

export default function AppRoutes() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/user/:username" element={<User />} />
        </Routes>
      </Fragment>
    </Router>
  );
}
