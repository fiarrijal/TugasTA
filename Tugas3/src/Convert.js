class Convert {
	toReamur(suhu, val) {
		if (suhu === "celcius") {
			return (val * 4) / 5;
		} else if (suhu === "fahrenheit") {
			return ((val - 32) * 4) / 9;
		} else {
			return val;
		}
	}

	toFahrenheit(suhu, val) {
		if (suhu === "celcius") {
			return (val * 9) / 5 + 32;
		} else if (suhu === "reamur") {
			return (val * 9) / 4 + 32;
		} else {
			return val;
		}
	}

	toCelcius(suhu, val) {
		if (suhu === "reamur") {
			return (val * 5) / 4;
		} else if (suhu === "fahrenheit") {
			return ((val - 32) * 5) / 9;
		} else {
			return val;
		}
	}
}

export default Convert;
// module.exports = Convert;
