// eslint-disable-next-line react/only-export-components -- Keep shared unit data beside its select without adding a file.
export const CONVERTER_CATEGORIES = {
  temperatura: {
    label: "Temperatura",
    title: "Conversor de temperatura",
    units: [
      { value: "celsius", label: "Celsius (°C)" },
      { value: "kelvin", label: "Kelvin (K)" },
      { value: "fahrenheit", label: "Fahrenheit (°F)" },
    ],
    defaultFrom: "celsius",
    defaultTo: "fahrenheit",
  },
  velocidad: {
    label: "Velocidad",
    title: "Conversor de velocidad",
    units: [
      { value: "km/h", label: "km/h" },
      { value: "mph", label: "mph" },
      { value: "m/s", label: "m/s" },
      { value: "ft/s", label: "ft/s" },
    ],
    defaultFrom: "km/h",
    defaultTo: "mph",
  },
  longitud: {
    label: "Longitud",
    title: "Conversor de longitud",
    units: [
      { value: "m", label: "m" },
      { value: "km", label: "km" },
      { value: "cm", label: "cm" },
      { value: "mm", label: "mm" },
      { value: "ft", label: "ft" },
      { value: "in", label: "in" },
      { value: "yd", label: "yd" },
      { value: "mi", label: "mi" },
    ],
    defaultFrom: "m",
    defaultTo: "km",
  },
};

export const UnitSelection = ({ category }) => {
  const { units, defaultFrom, defaultTo } = CONVERTER_CATEGORIES[category];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      <label className="flex flex-col gap-2 text-sm font-semibold text-[#374151]">
        De
        <select
          defaultValue={defaultFrom}
          className="h-[51px] w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 text-base font-semibold text-[#111827] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30"
        >
          {units.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold text-[#374151]">
        A
        <select
          defaultValue={defaultTo}
          className="h-[51px] w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 text-base font-semibold text-[#111827] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30"
        >
          {units.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
