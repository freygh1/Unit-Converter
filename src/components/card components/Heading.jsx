import { CONVERTER_CATEGORIES } from "./UnitSelection";

export const Heading = ({ category }) => {
  const { title } = CONVERTER_CATEGORIES[category];

  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-[#111827] sm:text-[28px]">
        {title}
      </h1>
      <p className="mt-1 text-base text-[#6B7280]">
        Ingresa un valor y selecciona las unidades.
      </p>
    </div>
  );
};
