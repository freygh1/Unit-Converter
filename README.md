# Convertidor de unidades para Física básica

Este proyecto está hecho con React + Tailwind

## Que hace?

Sirve para conversion entre unidades de velocidad, temperatura y longitud.
-Esto hará que sea facil calcular, por ejemplo de Kilometros a Metros.

## Unidades de conversion disponibles

### Temperaturas

- Celsius
- Kelvin
- Fahrenheit

### Velocidades

- km/h
- mph
- m/s
- ft/s

### Longitudes

- m, km, cm, mm, ft, in, yd y mi

## Límites de entrada

- **Temperatura:** desde el cero absoluto de cada unidad hasta 10⁹ en la unidad seleccionada.
  - Celsius: -273.15 °C
  - Kelvin: 0 K
  - Fahrenheit: -459.67 °F
- **Velocidad:** desde 0 hasta 10⁶ m/s (unidad base), convertido a la unidad seleccionada. Queda muy por debajo de la velocidad de la luz (c = 299,792,458 m/s).
- **Longitud:** desde 0 hasta 10¹² m (unidad base), convertido a la unidad seleccionada.

> Nota: los límites superiores son **lógicos, no físicos**. Se eligen por rendimiento numérico en JavaScript y para evitar resultados con exponenciales incómodos. Son constantes fáciles de ampliar si hiciera falta.

## Justificación de los límites

| Categoría | Límite físico real | Límite lógico aplicado | Por qué |

|---|---|---|---|  

| Temperatura | Cero absoluto (inferior). Sin tope superior demostrado (Planck ~1.417×10³² K como referencia teórica) | 10⁹ en la unidad | Cubre cualquier aplicación real (núcleo solar ~1.5×10⁷ K) sin acercarse al límite de precisión de JS |
| Longitud | Sin tope superior conocido | 10¹² m | ~6.7 UA; cubre distancias planetarias |
| Velocidad | c = 299,792,458 m/s | 10⁶ m/s (~0.33% de c) | Ningún vehículo convencional se acerca; evita exponenciales |

> Los números en JavaScript son IEEE-754 double. Por encima de `Number.MAX_SAFE_INTEGER` (~9×10¹⁵) se pierde precisión entera; los límites elegidos quedan muy por debajo.
