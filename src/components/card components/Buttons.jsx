export const Buttons = ({ canConvert, onConvert, onClear }) => {
  return (
    <div className="mt-5 flex flex-col gap-4">
      <button
        type="button"
        onClick={onConvert}
        disabled={!canConvert}
        className="h-[52px] w-full rounded-xl bg-[#3B82F6] text-base font-semibold text-white transition-colors hover:bg-[#2563EB] disabled:cursor-not-allowed disabled:opacity-50"
      >
        Convertir
      </button>
      <button
        type="button"
        onClick={onClear}
        className="h-[51px] w-full rounded-xl bg-[#F3F4F6] text-base font-semibold text-[#4B5563] transition-colors hover:bg-[#E5E7EB]"
      >
        Limpiar todo
      </button>
    </div>
  );
};
