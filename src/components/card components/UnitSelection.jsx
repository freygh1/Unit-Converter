// eslint-disable-next-line react/only-export-components -- Keep shared unit data beside its select without adding a file.
export const CONVERTER_CATEGORIES = {
  temperatura: {
    label: "Temperatura",
    title: "Conversor de temperatura",
    units: [
      {
        value: "celsius",
        label: "Celsius (°C)",
        symbol: "°C",
        min: -273.15,
        max: 1e9,
      },
      { value: "kelvin", label: "Kelvin (K)", symbol: "K", min: 0, max: 1e9 },
      {
        value: "fahrenheit",
        label: "Fahrenheit (°F)",
        symbol: "°F",
        min: -459.67,
        max: 1e9,
      },
    ],
    defaultFrom: "celsius",
    defaultTo: "fahrenheit",
  },
  velocidad: {
    label: "Velocidad",
    title: "Conversor de velocidad",
    units: [
      { value: "km/h", label: "km/h", symbol: "km/h", min: 0, max: 3_600_000 },
      {
        value: "mph",
        label: "mph",
        symbol: "mph",
        min: 0,
        max: 1_000_000 / 0.44704,
      },
      { value: "m/s", label: "m/s", symbol: "m/s", min: 0, max: 1_000_000 },
      {
        value: "ft/s",
        label: "ft/s",
        symbol: "ft/s",
        min: 0,
        max: 1_000_000 / 0.3048,
      },
    ],
    defaultFrom: "km/h",
    defaultTo: "mph",
  },
  longitud: {
    label: "Longitud",
    title: "Conversor de longitud",
    units: [
      { value: "m", label: "m", symbol: "m", min: 0, max: 1e12 },
      { value: "km", label: "km", symbol: "km", min: 0, max: 1e9 },
      { value: "cm", label: "cm", symbol: "cm", min: 0, max: 1e14 },
      { value: "mm", label: "mm", symbol: "mm", min: 0, max: 1e15 },
      { value: "ft", label: "ft", symbol: "ft", min: 0, max: 1e12 / 0.3048 },
      { value: "in", label: "in", symbol: "in", min: 0, max: 1e12 / 0.0254 },
      { value: "yd", label: "yd", symbol: "yd", min: 0, max: 1e12 / 0.9144 },
      { value: "mi", label: "mi", symbol: "mi", min: 0, max: 1e12 / 1609.344 },
    ],
    defaultFrom: "m",
    defaultTo: "km",
  },
};

export const UnitSelection = ({
  category,
  fromUnit,
  toUnit,
  onFromUnitChange,
  onToUnitChange,
}) => {
  const { units } = CONVERTER_CATEGORIES[category];
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      <label className="flex flex-col gap-2 text-sm font-semibold text-[#374151]">
        De
        <select
          value={fromUnit}
          onChange={(event) => onFromUnitChange(event.target.value)}
          className="h-[51px] w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 text-base font-semibold text-[#111827] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30"
        >
          {units
            .filter(({ value }) => value !== toUnit)
            .map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
        </select>
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold text-[#374151]">
        A
        <select
          value={toUnit}
          onChange={(event) => onToUnitChange(event.target.value)}
          className="h-[51px] w-full rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 text-base font-semibold text-[#111827] focus:border-[#3B82F6] focus:outline-none focus:ring-2 focus:ring-[#3B82F6]/30"
        >
          {units
            .filter(({ value }) => value !== fromUnit)
            .map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
        </select>
      </label>
    </div>
  );
};
