const kata = `The quIck brown fox jumps over the lAzy dog`;

const hilangVokal = (kata) => {
	return kata.replace(/[aiueo]/gi, "*");
};

console.log(hilangVokal(kata));
