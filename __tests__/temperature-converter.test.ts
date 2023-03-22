import { convertTemperature, TemperatureScale, conversionFactors } from "../src/index";
describe("convertTemperature", () => {
    const testCases: Array<[number, TemperatureScale, TemperatureScale, number]> = [
        [0, "C", "F", 32],
        [0, "C", "K", 273.15],
        [0, "C", "N", 0],
        [32, "F", "C", 0],
        [32, "F", "K", 273.15],
        [0, "K", "C", -273.15],
        [0, "K", "F", -459.67],
        [0, "K", "N", -90.14],
        [0, "N", "C", 0],
        [0, "N", "K", 273.15],
        [100, "C", "F", 212],
    ];

    test.each(testCases)("convertTemperature(%d, %s, %s) returns %f", (temp, fromUnit, toUnit, expected) => {
        expect(convertTemperature(temp, fromUnit, toUnit)).toBeCloseTo(expected, 2);
    });
});
