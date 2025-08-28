import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.js";
import Home from "./pages/Home.js";
import Reviews from "./pages/Reviews.js";
import Footer from "./components/Footer/Footer.js";
import Sales from "./pages/Sales.js";
import Buisness from "./pages/Buisness.js";
import Upcoming from "./pages/Upcoming.js";
import ContactUs from "./pages/ContactUs.js";
import Pricing from "./pages/Pricing.js";
import WriteReview from "./pages/WriteReview.js";
import UserProfile from "./components/UserProfile/UserProfile.js";
import FavUsers from "./components/ContactUs/FavUsers.js";
import FindBuisnessReview from "./components/writeReview/FindBuisnessReview.js";
import WriteAReview from "./components/writeAReview/writeAReview.js";
import AllCatregory from "./components/HomeCategory/AllCatregory.js";
import MyReviews from "./components/UserProfile/MyReviews.js";
import Community from "./pages/Community.js";
import LoginForm from "./components/businessLogin/BusinessLogin.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
// import AdminUsers from "./pages/admin/AdminUsers.js";
// import AdminProducts from "./pages/admin/AdminProducts.js";

const AppRouter = () => {
  // Check if the current route is an admin route
  const isAdminRoute = window.location.pathname.startsWith("/Dashboard");

  return (
    <>
      {/* Render header only if not on admin route */}
      {!isAdminRoute && <Header />}
      
      <Routes>
        {/* Regular routes */}
        <Route path="/" exact element={<Home />} />
        <Route path="/reviews" exact element={<Reviews />} />
        <Route path="/sales" exact element={<Sales />} />
        <Route path="/buisness" exact element={<Buisness />} />
        <Route path="/upcoming" exact element={<Upcoming />} />
        <Route path="/community" exact element={<Community />} />
        <Route path="/contactUs" exact element={<ContactUs />} />
        <Route path="/pricing" exact element={<Pricing />} />
        <Route path="/writeReview" exact element={<WriteReview />} />
        <Route path="/userProfile" exact element={<UserProfile />} />
        <Route path="/MyReviews" exact element={<MyReviews />} />
        <Route path="/userFav" exact element={<FavUsers />} />
        <Route path="/allCategories" exact element={<AllCatregory />} />
        <Route path="/myReview" exact element={<MyReviews />} />
        <Route path="/findBuisnessReview" exact element={<FindBuisnessReview />} />
        <Route path="/writeAReview" exact element={<WriteAReview />} />
        <Route path="/businesslogin" exact element={<LoginForm />} />

        {/* Admin routes */}
        <Route path="/dashboard" exact element={<Dashboard />} />
        {/* <Route path="/adusers" exact element={<AdminUsers />} /> */}
        {/* <Route path="/admin/products" exact element={<AdminProducts />} /> */}
      </Routes>
      {!isAdminRoute && <Footer />}

     
    </>
  );
};

export default AppRouter;
