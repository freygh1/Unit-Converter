import { useState } from "react";
import { CONVERTER_CATEGORIES } from "./card components/UnitSelection";
import { convertValue } from "../Formulas";
import { InputValue } from "./card components/InputValue";
import { UnitSelection } from "./card components/UnitSelection";
import { Heading } from "./card components/Heading";
import { Buttons } from "./card components/Buttons";
import { Results } from "./card components/Results";

export const CardBody = ({ category }) => {
  const { units, defaultFrom, defaultTo } = CONVERTER_CATEGORIES[category];
  const [fromUnit, setFromUnit] = useState(defaultFrom);
  const [toUnit, setToUnit] = useState(defaultTo);
  const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState(null);
  const [inputResetCount, setInputResetCount] = useState(0);
  const selectedUnit = units.find(({ value }) => value === fromUnit);
  const targetUnit = units.find(({ value }) => value === toUnit);
  const numericValue = Number(inputValue);
  const hasCompleteValue =
    /^-?(?:\d+(?:\.\d{0,2})?|\.\d{1,2})$/.test(inputValue);
  const canConvert =
    hasCompleteValue &&
    Number.isFinite(numericValue) &&
    numericValue >= selectedUnit.min &&
    numericValue <= selectedUnit.max;

  const handleConvert = () => {
    if (!canConvert) return;

    setResultValue({
      value: convertValue(category, fromUnit, toUnit, numericValue),
      equivalent: convertValue(category, fromUnit, toUnit, 1),
    });
  };

  const handleClear = () => {
    setInputValue("");
    setResultValue(null);
    setInputResetCount((count) => count + 1);
  };

  const handleFromUnitChange = (unit) => {
    setFromUnit(unit);
    setInputValue("");
    setResultValue(null);
  };

  return (
    <main className="mt-6 w-full max-w-[572px] rounded-3xl bg-white p-6 sm:p-8">
      <Heading category={category} />
      <InputValue
        key={`${fromUnit}-${inputResetCount}`}
        unit={selectedUnit}
        value={inputValue}
        onValueChange={setInputValue}
      />
      <UnitSelection
        category={category}
        fromUnit={fromUnit}
        toUnit={toUnit}
        onFromUnitChange={handleFromUnitChange}
        onToUnitChange={(unit) => {
          setToUnit(unit);
          setResultValue(null);
        }}
      />
      <Buttons
        canConvert={canConvert}
        onConvert={handleConvert}
        onClear={handleClear}
      />
      <Results
        result={resultValue?.value ?? null}
        equivalent={resultValue?.equivalent ?? null}
        fromUnit={selectedUnit}
        unit={targetUnit}
      />
    </main>
  );
};
