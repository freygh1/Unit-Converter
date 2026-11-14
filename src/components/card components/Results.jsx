const formatResult = (value) =>
  new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  }).format(value);

export const Results = ({ result, unit }) => {
  return (
    <section
      aria-live="polite"
      className="mt-6 flex items-center justify-between gap-4"
    >
      <h2 className="text-sm font-semibold text-[#6B7280]">Resultado</h2>
      <output className="text-2xl font-bold text-[#111827] sm:text-[28px]">
        {result === null ? "—" : `${formatResult(result)} ${unit.label}`}
      </output>
    </section>
  );
};
