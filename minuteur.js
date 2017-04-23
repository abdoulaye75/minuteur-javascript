let minuteurElt = document.getElementById("minuteur");

function minuteurDecrease() {
	let minuteur = Number(minuteurElt.textContent);

	if (minuteur > 1) {
		minuteurElt.textContent = minuteur - 1;
	} else {
		clearInterval(intervalId);
		minuteurElt.textContent = 0;
	}
}

let intervalId = setInterval(minuteurDecrease, 1000);