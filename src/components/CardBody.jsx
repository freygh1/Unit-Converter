import { UnitSelection } from "./card components/UnitSelection";
import { Heading } from "./card components/Heading";

export const CardBody = ({ category }) => {
  return (
    <main className="mt-6 w-full max-w-[572px] rounded-3xl bg-white p-6 sm:p-8">
      <Heading category={category} />
      <UnitSelection key={category} category={category} />
    </main>
  );
};
