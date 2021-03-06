import React from "react";
import { Navigation } from "../components/Navigation";
import { ResultsHeader } from "../components/ResultsHeader";
import { ResultsWrapper } from "../components/ResultsWrapper";
import { Footer } from "../components/Footer";

export const Productspage = () => {
  return (
    <>
      <Navigation />
      <ResultsHeader maintext="OUR PRODUCTS" />
      <ResultsWrapper />

      <Footer />
    </>
  );
};
