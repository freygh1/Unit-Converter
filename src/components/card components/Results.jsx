const formatResult = (value) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 12,
  }).format(value);

export const Results = ({ result, equivalent, fromUnit, unit }) => {
  return (
    <section
      aria-live="polite"
      className="mt-3 flex flex-wrap items-center justify-between gap-2 sm:mt-6 sm:gap-4"
    >
      <p className="text-xs font-semibold text-[#6B7280] sm:text-sm">
        {result === null
          ? "Resultado"
          : `1 ${fromUnit.symbol} = ${formatResult(equivalent)} ${unit.symbol}`}
      </p>
      <output className="text-xl font-bold text-[#111827] sm:text-[28px]">
        {result === null ? "-" : `${formatResult(result)} ${unit.label}`}
      </output>
    </section>
  );
};
