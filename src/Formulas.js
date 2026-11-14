// Temperature base unit: Celsius.
// Speed base unit: meters per second.
// Length base unit: meters.
export const FORMULAS = {
  temperatura: {
    celsius: {
      aBase: (value) => value,
      desdeBase: (value) => value,
    },
    kelvin: {
      aBase: (value) => value - 273.15,
      desdeBase: (value) => value + 273.15,
    },
    fahrenheit: {
      aBase: (value) => ((value - 32) * 5) / 9,
      desdeBase: (value) => (value * 9) / 5 + 32,
    },
  },
  velocidad: {
    "km/h": {
      aBase: (value) => value / 3.6,
      desdeBase: (value) => value * 3.6,
    },
    mph: {
      aBase: (value) => value * 0.44704,
      desdeBase: (value) => value / 0.44704,
    },
    "m/s": {
      aBase: (value) => value,
      desdeBase: (value) => value,
    },
    "ft/s": {
      aBase: (value) => value * 0.3048,
      desdeBase: (value) => value / 0.3048,
    },
  },
  longitud: {
    m: {
      aBase: (value) => value,
      desdeBase: (value) => value,
    },
    km: {
      aBase: (value) => value * 1000,
      desdeBase: (value) => value / 1000,
    },
    cm: {
      aBase: (value) => value / 100,
      desdeBase: (value) => value * 100,
    },
    mm: {
      aBase: (value) => value / 1000,
      desdeBase: (value) => value * 1000,
    },
    ft: {
      aBase: (value) => value * 0.3048,
      desdeBase: (value) => value / 0.3048,
    },
    in: {
      aBase: (value) => value * 0.0254,
      desdeBase: (value) => value / 0.0254,
    },
    yd: {
      aBase: (value) => value * 0.9144,
      desdeBase: (value) => value / 0.9144,
    },
    mi: {
      aBase: (value) => value * 1609.344,
      desdeBase: (value) => value / 1609.344,
    },
  },
};

export const convertValue = (category, fromUnit, toUnit, value) => {
  if (!Number.isFinite(value)) {
    throw new TypeError("El valor a convertir debe ser un número finito.");
  }

  const formulas = FORMULAS[category];
  if (!formulas) {
    throw new RangeError(`Categoría desconocida: ${category}`);
  }

  const sourceFormula = formulas[fromUnit];
  const targetFormula = formulas[toUnit];
  if (!sourceFormula || !targetFormula) {
    throw new RangeError("La unidad no pertenece a la categoría seleccionada.");
  }

  return targetFormula.desdeBase(sourceFormula.aBase(value));
};
