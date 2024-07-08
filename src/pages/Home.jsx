import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Newsletter from "../components/Newsletter";
import Filter from "./Filter";
import Features from "../components/Features";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container-fluid d-flex align-items-center justify-content-center ">
        <div className="row w-100 justify-content-around">
          <div className="col-md-2">
            <Filter />
          </div>
          <div className="col-md-9 row justify-content-around">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
      <Features />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
