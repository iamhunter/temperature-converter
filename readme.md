# Temperature Converter

A simple and flexible temperature converter for Node.js and the browser, with support for a wide range of temperature scales, including Celsius, Fahrenheit, Kelvin, and Newton.

## Installation

You can install the package via npm:

```bash
npm install @iamhunter/temperature-converter
```

## Usage

```javascript
import { convertTemperature, TemperatureScale } from "@iamhunter/temperature-converter";

const temperature = 20;
const fromUnit: TemperatureScale = "C";
const toUnit: TemperatureScale = "F";

const convertedTemperature = convertTemperature(temperature, fromUnit, toUnit);

console.log(`${temperature} ${fromUnit} is ${convertedTemperature} ${toUnit}.`);
// Output: 20 C is 68 F.
```

## Supported Temperature Scales

The temperature converter supports the following temperature scales:

-   Celsius (C)
-   Fahrenheit (F)
-   Kelvin (K)
-   Newton (N)

## License

This package is open source and available under the MIT License.
