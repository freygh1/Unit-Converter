import { Buttons } from "./card components/Buttons";
import { InputValue } from "./card components/InputValue";
import { Results } from "./card components/Results";
import { UnitSelection } from "./card components/UnitSelection";
import { Heading } from "./card components/Heading";

export const CardBody = () => {
  return (
    <main>
      <Heading></Heading>
      <InputValue></InputValue>
      <UnitSelection></UnitSelection>
      <Buttons></Buttons>
      <Results></Results>
    </main>
  );
};
