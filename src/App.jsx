// eslint-disable-next-line no-unused-vars
import React from "react";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import Listing from "./pages/Listing";
import BlogDetails from "./pages/BlogDetails";
import ListingDetails from "./pages/ListingDetails";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="w-[100%] overflow-x-hidden">
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
        <Route path="/listing" element={<Listing></Listing>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route
          path="/listing/details"
          element={<ListingDetails></ListingDetails>}
        ></Route>
        <Route
          path="/blog/cafe-apartment"
          element={<BlogDetails></BlogDetails>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
