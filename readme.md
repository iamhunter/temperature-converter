# Temperature Converter

A simple and flexible temperature converter for Node.js and the browser, with support for a wide range of temperature scales, including Celsius, Fahrenheit, Kelvin, and Newton.

## Installation

You can install the package via npm:

```bash

npm install @iamhunter/temperature-converter
```

## Usage

To use the temperature converter, you can import the convertTemperature function and the TemperatureScale type from the package:

```javascript
import { convertTemperature, TemperatureScale } from "@iamhunter/temperature-converter";
```

Then, you can use the convertTemperature function to convert a temperature from one scale to another:

```javascript
const temperature = 20;
const fromUnit: TemperatureScale = "C";
const toUnit: TemperatureScale = "F";

const convertedTemperature = convertTemperature(temperature, fromUnit, toUnit);

console.log(`${temperature} ${fromUnit} is ${convertedTemperature} ${toUnit}.`);
// Output: 20 C is 68 F.
```

The convertTemperature function throws an error if the conversion is not supported:

```javascript
const temperature = 20;
const fromUnit: TemperatureScale = "N";
const toUnit: TemperatureScale = "F";

try {
    const convertedTemperature = convertTemperature(temperature, fromUnit, toUnit);
} catch (error) {
    console.error(error.message);
}
// Output: Unsupported conversion: N to F.
```

## Supported Temperature Scales

The temperature converter supports the following temperature scales:

- Celsius (C)
- Fahrenheit (F)
- Kelvin (K)
- Newton (N)

## License

This package is open source and available under the MIT License.
