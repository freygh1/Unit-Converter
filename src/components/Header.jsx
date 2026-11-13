import { CONVERTER_CATEGORIES } from "./card components/UnitSelection";

export const Header = ({ category, onCategoryChange }) => {
  return (
    <nav
      aria-label="Categorías de conversión"
      className="grid w-full max-w-[572px] grid-cols-3 gap-3"
    >
      {Object.entries(CONVERTER_CATEGORIES).map(([key, { label }]) => (
        <button
          key={key}
          type="button"
          aria-pressed={category === key}
          onClick={() => onCategoryChange(key)}
          className={`h-12 rounded-xl px-2 text-base font-semibold transition-colors ${
            category === key
              ? "bg-[#3B82F6] text-white"
              : "bg-[#F3F4F6] text-[#4B5563] hover:bg-white"
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};
