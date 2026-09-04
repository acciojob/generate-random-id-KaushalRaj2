function makeid(l) {
	let result=""
	let rand="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
	for(let i=0; i<l;i++){
		result+=rand.charAt(Math.floor(Math.random() * rand.length) + 0)
	}
	return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
