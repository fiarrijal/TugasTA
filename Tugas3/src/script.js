import "./changeColor.js";
import Convert from "./Convert.js";

// ga bisa dipake karena tidak bisa set type "commonjs"
// require("./changeColor");
// const Convert = require("./Convert");

const convert = new Convert();

const input = document.querySelector("#input");
const output = document.querySelector("#output-to");
const firstTemp = document.querySelector("#first-temp");
const resultTemp = document.querySelector("#result-temp");
const rumus = document.querySelector("#rumus");

const select = () => {
	firstTemp.value;
	resultTemp.value;
};

const clear = () => {
	input.value = "";
	output.value = "";
	rumus.innerHTML = "";
};

select(); // untuk reset #input jika jenis suhu diganti

// event listener untuk memilih jenis suhu awal
firstTemp.addEventListener("change", function () {
	select();
	clear();
});

// event listener untuk memilih jenis suhu akhir
resultTemp.addEventListener("change", function () {
	select();
	clear();
});

// event listener untuk menjalankan fungsi jika angka sudah diinput
input.addEventListener("keyup", function () {
	if (resultTemp.value === "celcius") {
		const a = convert.toCelcius(firstTemp.value, input.value);
		output.value = a;
		rumus.innerHTML = rumusHitung(firstTemp.value, resultTemp.value, input.value);
	} else if (resultTemp.value === "reamur") {
		const a = convert.toReamur(firstTemp.value, input.value);
		output.value = a;
		rumus.innerHTML = rumusHitung(firstTemp.value, resultTemp.value, input.value);
	} else if (resultTemp.value === "fahrenheit") {
		const a = convert.toFahrenheit(firstTemp.value, input.value);
		output.value = a;
		rumus.innerHTML = rumusHitung(firstTemp.value, resultTemp.value, input.value);
	}
});

const rumusHitung = (suhuAwal, suhuAkhir, soal) => {
	if (suhuAkhir === "celcius") {
		if (suhuAwal === "celcius") {
			return `Tidak ada rumus, karena suhu tidak dikonversi`;
		} else if (suhuAwal === "reamur") {
			return `${soal} * (5/4)`;
		} else if (suhuAwal === "fahrenheit") {
			return `(${soal} - 32) * (5/9)`;
		} else {
			return `error bos`;
		}
	} else if (suhuAkhir === "reamur") {
		if (suhuAwal === "celcius") {
			return `${soal} * (4/5)`;
		} else if (suhuAwal === "reamur") {
			return `Tidak ada rumus, karena suhu tidak dikonversi`;
		} else if (suhuAwal === "fahrenheit") {
			return `(${soal} - 32) * (4/9)`;
		} else {
			return `error bos`;
		}
	} else if (suhuAkhir === "fahrenheit") {
		if (suhuAwal === "celcius") {
			return `${soal} * (9/5) + 32`;
		} else if (suhuAwal === "reamur") {
			return `${soal} * (9/4) + 32`;
		} else if (suhuAwal === "fahrenheit") {
			return `Tidak ada rumus, karena suhu tidak dikonversi`;
		} else {
			return `error bos`;
		}
	} else {
		return `error bos`;
	}
};
