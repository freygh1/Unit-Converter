import { useLayoutEffect, useRef, useState } from "react";

const formatNumber = (value) => {
  const [integer, decimal] = value.split(".");
  const groupedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decimal === undefined ? groupedInteger : `${groupedInteger}.${decimal}`;
};

const formatLimit = (value) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(value);

export const InputValue = ({ unit, value, onValueChange }) => {
  const [limitError, setLimitError] = useState(false);
  const inputRef = useRef(null);
  const nextCaretPosition = useRef(null);
  const formattedValue = formatNumber(value);

  useLayoutEffect(() => {
    if (nextCaretPosition.current !== null) {
      inputRef.current?.setSelectionRange(
        nextCaretPosition.current,
        nextCaretPosition.current,
      );
      nextCaretPosition.current = null;
    }
  }, [value]);

  const handleChange = (event) => {
    const enteredValue = event.target.value;
    const caretPosition = event.target.selectionStart ?? enteredValue.length;
    const ungroupedValue = enteredValue.replaceAll(",", "");
    const allowsNegative = unit.min < 0;
    const validNumber = allowsNegative
      ? /^-?\d*\.?\d{0,2}$/.test(ungroupedValue)
      : /^\d*\.?\d{0,2}$/.test(ungroupedValue);

    if (!validNumber) return;

    const isCompleteValue = /^-?(?:\d+(?:\.\d*)?|\.\d+)$/.test(
      ungroupedValue,
    );
    if (isCompleteValue) {
      const numericValue = Number(ungroupedValue);
      if (numericValue < unit.min || numericValue > unit.max) {
        setLimitError(true);
        return;
      }
    }

    setLimitError(false);

    const charsBeforeCaret = enteredValue
      .slice(0, caretPosition)
      .replaceAll(",", "").length;
    const formattedValue = formatNumber(ungroupedValue);
    let newCaretPosition = 0;
    let countedChars = 0;

    while (
      newCaretPosition < formattedValue.length &&
      countedChars < charsBeforeCaret
    ) {
      if (formattedValue[newCaretPosition] !== ",") countedChars += 1;
      newCaretPosition += 1;
    }

    nextCaretPosition.current = newCaretPosition;
    onValueChange(ungroupedValue);
  };

  return (
    <label className="mb-2 flex flex-col gap-1.5 text-xs font-semibold text-[#374151] sm:mb-5 sm:gap-2 sm:text-sm">
      Valor a convertir
      <input
        ref={inputRef}
        type="text"
        inputMode="decimal"
        value={formattedValue}
        onChange={handleChange}
        aria-invalid={limitError}
        aria-describedby={limitError ? "input-range-error" : undefined}
        className={`h-11 w-full rounded-xl border bg-[#F9FAFB] px-3 text-base font-semibold text-[#111827] focus:outline-none focus:ring-2 sm:h-[51px] sm:px-4 ${
          limitError
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/30"
            : "border-[#E5E7EB] focus:border-[#3B82F6] focus:ring-[#3B82F6]/30"
        }`}
      />
      {limitError && (
        <span
          id="input-range-error"
          role="alert"
          className="text-xs font-normal text-red-600 sm:text-sm"
        >
          El rango permitido para {unit.label} es de {formatLimit(unit.min)} a{" "}
          {formatLimit(unit.max)}.
        </span>
      )}
    </label>
  );
};
