import { useState } from "react";
import { CONVERTER_CATEGORIES } from "./card components/UnitSelection";
import { InputValue } from "./card components/InputValue";
import { UnitSelection } from "./card components/UnitSelection";
import { Heading } from "./card components/Heading";

export const CardBody = ({ category }) => {
  const { units, defaultFrom, defaultTo } = CONVERTER_CATEGORIES[category];
  const [fromUnit, setFromUnit] = useState(defaultFrom);
  const [toUnit, setToUnit] = useState(defaultTo);
  const selectedUnit = units.find(({ value }) => value === fromUnit);

  return (
    <main className="mt-6 w-full max-w-[572px] rounded-3xl bg-white p-6 sm:p-8">
      <Heading category={category} />
      <InputValue key={fromUnit} unit={selectedUnit} />
      <UnitSelection
        category={category}
        fromUnit={fromUnit}
        toUnit={toUnit}
        onFromUnitChange={setFromUnit}
        onToUnitChange={setToUnit}
      />
    </main>
  );
};
