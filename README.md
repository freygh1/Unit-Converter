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

---

> - NOTA 1: los límites superiores son **lógicos, no físicos**. Se eligen por rendimiento numérico en JavaScript y para evitar resultados con exponenciales incómodos. Son constantes fáciles de ampliar si hiciera falta.

---

> - NOTA 2: mientras la entrada está limitada a dos decimales, los resultados tienen un limite de 12 decimales para un resultado mas amplio.
