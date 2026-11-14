export const Buttons = ({ canConvert, onConvert, onClear }) => {
  return (
    <div className="mt-2 flex flex-col gap-2 sm:mt-5 sm:gap-4">
      <button
        type="button"
        onClick={onConvert}
        disabled={!canConvert}
        className="h-11 w-full rounded-xl bg-[#3B82F6] text-sm font-semibold text-white transition-colors hover:bg-[#2563EB] disabled:cursor-not-allowed disabled:opacity-50 sm:h-[52px] sm:text-base"
      >
        Convertir
      </button>
      <button
        type="button"
        onClick={onClear}
        className="h-11 w-full rounded-xl bg-[#F3F4F6] text-sm font-semibold text-[#4B5563] transition-colors hover:bg-[#E5E7EB] sm:h-[51px] sm:text-base"
      >
        Limpiar todo
      </button>
    </div>
  );
};
