// const Convert = require("../src/Convert.js");
import Convert from "../src/Convert";

const convert = new Convert();

test("from other temperature to celcius", () => {
	expect(convert.toCelcius("celcius", 100)).toBe(100);
	expect(convert.toCelcius("reamur", 80)).toBe(100);
	expect(convert.toCelcius("fahrenheit", 212)).toBe(100);
});

test("from other temperature to reamur", () => {
	expect(convert.toReamur("celcius", 100)).toBe(80);
	expect(convert.toReamur("reamur", 80)).toBe(80);
	expect(convert.toReamur("fahrenheit", 212)).toBe(80);
});

test("from other temperature to Fahrenheit", () => {
	expect(convert.toFahrenheit("celcius", 100)).toBe(212);
	expect(convert.toFahrenheit("reamur", 80)).toBe(212);
	expect(convert.toFahrenheit("fahrenheit", 212)).toBe(212);
});
