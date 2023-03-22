// Define a type to represent different temperature scales
export type TemperatureScale = "C" | "F" | "K" | "N";

// Define a function type for converting temperatures
type ConversionFunction = (temp: number) => number;

// Define a nested object to store conversion factors between different scales
export type ConversionFactors = Record<TemperatureScale, Partial<Record<TemperatureScale, ConversionFunction>>>;

export const conversionFactors: ConversionFactors = {
    // Celsius conversions to other scales
    C: {
        F: (temp: number): number => (temp * 9) / 5 + 32,
        K: (temp: number): number => temp + 273.15,
        N: (temp: number): number => (temp * 33) / 100,
    },
    // Fahrenheit conversions to other scales
    F: {
        C: (temp: number): number => ((temp - 32) * 5) / 9,
        K: (temp: number): number => ((temp + 459.67) * 5) / 9,
    },
    // Kelvin conversions to other scales
    K: {
        C: (temp: number): number => temp - 273.15,
        F: (temp: number): number => (temp * 9) / 5 - 459.67,
        N: (temp: number): number => ((temp - 273.15) * 33) / 100,
    },
    // Newton conversions to other scales
    N: {
        C: (temp: number): number => (temp * 100) / 33,
        K: (temp: number): number => (temp * 100) / 33 + 273.15,
    },
};

/**
 * Converts a temperature from one unit to another.
 *
 * @param {number} temp - The temperature value to convert.
 * @param {TemperatureScale} fromUnit - The unit of the input temperature.
 * @param {TemperatureScale} toUnit - The unit to convert the temperature to.
 *
 * @returns {number} - The converted temperature value.
 * @throws {Error} - If the conversion is not supported.
 */
export const convertTemperature = (temp: number, fromUnit: TemperatureScale, toUnit: TemperatureScale): number => {
    // Check if the fromUnit and toUnit are the same
    if (fromUnit === toUnit) {
        throw new Error(`Unsupported conversion: ${fromUnit} to ${toUnit}.`);
    }

    // Check if the conversion is supported
    if (!(fromUnit in conversionFactors) || !(toUnit in conversionFactors[fromUnit])) {
        throw new Error(`Unsupported conversion: ${fromUnit} to ${toUnit}`);
    }

    // Retrieve the conversion function and apply it to the temperature
    const conversionFunc = conversionFactors[fromUnit][toUnit] as ConversionFunction;
    return conversionFunc(temp);
};
