
const inKelvinFromCel = (temp) => {
	return temp + 273.15;
};

const inFarFromCel = (temp) => {
	return ((9 / 5) * temp + 32).toFixed(2);
};

const inKelvinFromFar = (temp) => {
	return ((5 / 9) * (temp -32) + 273.15).toFixed(2);
};

const inCelFromFar = (temp) => {
	return ((5 / 9) * (temp - 32)).toFixed(2);
};

const inCelFromKel = (temp) => {
	return temp - 273.15;
};

const inFarFromKel = (temp) => {
	return parseFloat(inFarFromCel(parseFloat(inCelFromKel(temp)))).toFixed(2);
};

const placeItemsInHTML = (cel, far, kel) => {
	const parent = document.querySelector("#output");
	const k = document.createElement("div");
	const f = document.createElement("div");
	const c = document.createElement("div");
	k.innerHTML = kel;
	c.innerHTML = cel;
	f.innerHTML = far;
	parent.append(c);
	parent.append(f);
	parent.append(k);
};

const handleReset = () => {
	document.querySelector("#output").innerHTML = "";
};

const handleTempChange = () => {
	const temp = parseFloat(document.querySelector("#temp").value);
	const type = document.querySelector("#type").value;
	console.log(temp);
	if (
		temp === null ||
		temp === undefined ||
		isNaN(temp) ||
		typeof temp !== "number" ||
		!type
	) {
		alert("Please Enter Temperature to convert");
		return;
	}
	let kelvin = 0,
		celsius = 0,
		far = 0;
	switch (type) {
		case "celsius":
			celsius = temp;
			kelvin = inKelvinFromCel(temp);
			far = inFarFromCel(temp);
			break;
		case "kelvin":
			kelvin = temp;
			celsius = inCelFromKel(temp);
			far = inFarFromKel(temp);
			break;
		case "fahrenheit":
			far = temp;
			kelvin = inKelvinFromFar(temp);
			celsius = inCelFromFar(temp);
			break;
		default:
			break;
	}
	placeItemsInHTML(celsius, far, kelvin);
};

document.getElementById("submit").addEventListener("click", handleTempChange);
document.getElementById("reset").addEventListener("click", handleReset);
