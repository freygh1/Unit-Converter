import { CONVERTER_CATEGORIES } from "./UnitSelection";

export const Heading = ({ category }) => {
  const { title } = CONVERTER_CATEGORIES[category];

  return (
    <div className="mb-3 sm:mb-6">
      <h1 className="text-base font-bold text-[#111827] min-[380px]:text-lg sm:text-[28px]">
        {title}
      </h1>
      <p className="mt-1 text-xs text-[#6B7280] sm:text-base">
        Ingresa un valor y selecciona las unidades.
      </p>
    </div>
  );
};
