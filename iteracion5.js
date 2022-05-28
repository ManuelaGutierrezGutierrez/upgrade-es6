//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const age18 = ages.filter((age) => age >= 18);
console.log(age18);

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const evenNumber = ages2.filter((age) => age % 2 === 0);
console.log(evenNumber);

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
	{ name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
	{ name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
	{ name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
	{ name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const legends = streamers.filter(
	(streamer) => streamer.gameMorePlayed === "League of Legends"
);
console.log(legends);

//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los streamers que incluyan el caracter 'u' en su propiedad .name.
//Recomendamos usar la funcion .includes() para la comprobación.
const streamers2 = [
	{ name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
	{ name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
	{ name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
	{ name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const streamers2U = streamers2.filter((streamer) =>
	streamer.name.includes("u")
);
console.log(streamers2U);

//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed.
//Recomendamos usar la funcion .includes() para la comprobación.
//Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

const streamerLegends = streamers
	.filter((streamer) => streamer.gameMorePlayed.includes("Legends"))
	.map((streamer) => {
		if (streamer.age > 35) {
			streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
		}
		return streamer;
	});

console.log(streamerLegends);

//5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los
//streamers que incluyan la palabra introducida en el input.
//De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'.
//Si introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers3 = [
	{ name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
	{ name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
	{ name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
	{ name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const searchStreamer = document
	.querySelector(".inputStreamer")
	.addEventListener("input", (event) => {
		const userInput = event.target.value.toLowerCase().trim();
		const filtered = streamers3.filter((streamer) => {
			return streamer.name.toLowerCase().includes(userInput);
		});

		console.log(filtered);
	});

//5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
//los streamers que incluyan la palabra introducida en el input. De esta forma, si
//introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i',
//me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
//En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
const streamers4 = [
	{ name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
	{ name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
	{ name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
	{ name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

let streamerButton = document.querySelector(".buttonStreamer");
let input = document.querySelector(".inputStreamer");

streamerButton.addEventListener("click", (event) => {
	let filtered2 = streamers4.filter((streamer) => {
		if (streamer.name.toLowerCase().includes(input.value)) {
			return streamer;
		}
	});
	console.log(filtered2);
});
