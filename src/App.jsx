import { useState } from "react";
import { CardBody } from "./components/CardBody";
import { Header } from "./components/Header";
import "./App.css";

export const App = () => {
  const [category, setCategory] = useState("temperatura");

  return (
    <div className="flex min-h-screen flex-col items-center bg-linear-to-r from-[#1E40AF] via-[#3B82F6] to-[#60A5FA] px-4 pb-12 pt-12 sm:pt-[145px]">
      <Header category={category} onCategoryChange={setCategory} />
      <CardBody key={category} category={category} />
    </div>
  );
};
