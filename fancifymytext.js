function makeBigger() {
	alert("Hello, world!");
	document.getElementById("myText").style.fontSize = "24pt";
}

function applyStyle() {
	var textArea = document.getElementById("myText");

	if (document.getElementById("fancy").checked) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "";
		textArea.style.textDecoration = "none";
	}
}

function moo() {
	var textArea = document.getElementById("myText");
	var text = textArea.value.toUpperCase();

	var sentences = text.split(".");

	for (var i = 0; i < sentences.length; i++) {
		if (sentences[i].trim() !== "") {
			var words = sentences[i].split(" ");
			for (var j = words.length - 1; j >= 0; j--) {
				if (words[j].trim() !== "") {
					words[j] = words[j] + "-MOO";
					break;
				}
			}
			sentences[i] = words.join(" ");
		}
	}

	textArea.value = sentences.join(".");
}
