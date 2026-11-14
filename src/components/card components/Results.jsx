const formatResult = (value) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 12,
  }).format(value);

export const Results = ({ result, equivalent, fromUnit, unit }) => {
  return (
    <section
      aria-live="polite"
      className="mt-6 flex items-center justify-between gap-4"
    >
      <p className="text-sm font-semibold text-[#6B7280]">
        {result === null
          ? "Resultado"
          : `1 ${fromUnit.symbol} = ${formatResult(equivalent)} ${unit.symbol}`}
      </p>
      <output className="text-2xl font-bold text-[#111827] sm:text-[28px]">
        {result === null ? "-" : `${formatResult(result)} ${unit.label}`}
      </output>
    </section>
  );
};
