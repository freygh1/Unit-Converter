import { useState } from "react";
import { CardBody } from "./components/CardBody";
import { Header } from "./components/Header";
import "./App.css";

export const App = () => {
  const [category, setCategory] = useState("temperatura");

  return (
    <div className="flex min-h-screen min-h-[100svh] flex-col items-center justify-center bg-linear-to-r from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] px-3 py-1 sm:px-0 sm:py-0">
      <Header category={category} onCategoryChange={setCategory} />
      <CardBody key={category} category={category} />
    </div>
  );
};
