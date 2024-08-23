function byId(id) {
	return document.getElementById(id);
}
function randItem(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
function randNum(min, max) {
	return Math.ceil(Math.random() * (max - min)) + min - 1;
}
function splitTwo(str, delim1, delim2) {
	return str.split(delim1)[1].split(delim2)[0];
}
function accSplitTwo(str, delim1, delim2) {
	let amount = str.split(delim1).length - 1;
	let amount2 = str.split(delim2).length - 1;
}
String.prototype.replaceAt = function (index, replacement) {
	return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}
//IMPORTANT
var submitBtn = document.getElementById('submit');
var submitInput = document.getElementById('answer');
var backBtn = document.getElementById('back');
var nextBtn = document.getElementById('next');
var hintBtn = document.getElementById('hint');
var problemP = byId("curProblem");
var eventP = byId("event-p");
var omegaDiv = byId("omega-text");
var omegaP = byId("omega-p");
var omegaBtn = byId("exit-omega");
var currentAnswer = "";
var currentProblem = 1;
var currentSection = 0;
var boxes = [];
var sub_boxes = [];
//helpvar
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var inputFill = "-- -";
var completed = [];
var completedSections = [];
var nextAvailable = false;

function genAnswer(section, problem) {
	currentCode = currentSection + ":" + (currentProblem);
	console.log(currentCode);
	if (completed.includes(currentCode)) {
		nextBtn.classList.remove("hide");
	} else {
		nextBtn.classList.add("hide");
	}
	if (currentProblem > 1) {
		backBtn.classList.remove("hide");
	} else {
		backBtn.classList.add("hide");
	}
	if (boxes) {
		currentAnswer = "";
		boxes.forEach(function (item) {
			item.remove();
		});
		sub_boxes.forEach(function (item) {
			item.remove();
		});
	}
	// TABLE RESET
	let table = byId("target-div");
	while (table.firstChild) {
		table.removeChild(table.lastChild);
	}
	zelen = 3;
	zeheight = 3;
	for (let i = 0; i < zeheight; i++) {
		zerow = document.createElement("tr");
		for (let j = 0; j < zelen; j++) {
			zetd = document.createElement("td");
			zetd.setAttribute("id", j + ":" + i);
			zerow.appendChild(zetd);
		}
		table.appendChild(zerow);
	}
	// END TABLE RESET

	given = puzzles[section]["problem" + problem];
	givensplit = given.split("||");
	givensplit.forEach(function (item) {
		if (item.substring(0, 5) == "table") {
			let table = byId("target-div");
			while (table.firstChild) {
				table.removeChild(table.lastChild);
			}
			args = splitTwo(item, "[", "]").split(",");
			args1 = args[0].split("=");
			args2 = args[1].split("=");
			zelen = 3;
			zeheight = 3;
			if (args1[0] == "length") {
				zelen = args1[1];
				zeheight = args2[1];
			} else {
				zelen = args2[1];
				zeheight = args1[1];
			}
			for (let i = 0; i < zeheight; i++) {
				zerow = document.createElement("tr");
				for (let j = 0; j < zelen; j++) {
					zetd = document.createElement("td");
					zetd.setAttribute("id", i + ":" + j);
					zerow.appendChild(zetd);
				}
				table.appendChild(zerow);
			}
		}
		if (item.substring(0, 3) == "box") {
			box = document.createElement("div");
			box.classList.add("normal-box");
			sub_box = document.createElement("div");
			sub_box.classList.add("sub-box");
			para = document.createElement("p");
			zeattributes = splitTwo(item, "[", "]").split(",");
			position = "";
			speciallist = [];
			zeattributes.forEach(function (item2) {
				arg1 = item2.split("=")[0];
				arg2 = item2.split("=")[1];
				if (arg1 == "class") {
					box.classList.add(splitTwo(arg2, "'", "'"));
					console.log(arg2);
					if (splitTwo(arg2, "'", "'") == "box-large") {
						speciallist.push('box-large');
					}
				}
				if (arg1 == "given") {
					para.innerHTML = splitTwo(arg2, "'", "'");
				}
				if (arg1 == "answer") {
					currentAnswer = splitTwo(arg2, "'", "'");
				}
				if (arg1 == "pos") {
					position = splitTwo(arg2, "'", "'");
				}
			});
			if (speciallist.includes("box-large")) {
				byId(position).setAttribute("colspan", 2);
				byId(position).setAttribute("rowspan", 2);
			}
			byId(position).appendChild(box);
			box.appendChild(sub_box);
			sub_box.appendChild(para);
			boxes.push(box);
			sub_boxes.push(sub_box);
		}
	});
	inputFill = "";
	for (let i = 0; i < currentAnswer.length; i++) {
		if (currentAnswer.charAt(i) != " ") {
			inputFill += "-";
		} else {
			inputFill += " ";
		}
	}
	submitInput.value = inputFill;
}
genAnswer("The Transparent", 1);
function clearP() {
	eventP.innerHTML = "";
}
function checkInput() {
	let curvalue = submitInput.value;
	let result = inputFill.split('');
	let cursorPosition = submitInput.selectionStart;

	// Replace dashes with user input characters
	for (let i = 0, j = 0; i < result.length && j < curvalue.length; i++) {
		if ((result[i] === '-' && curvalue[j] !== ' ') || (i == 0 && result[i] == currentAnswer.charAt(0))) {
			result[i] = curvalue[j];
			j++;

		} else if (result[i] === ' ') {
			if (curvalue[j] != '-') {
				result[i] = curvalue[j];
				j++;
			}
			continue;
		} else if (curvalue[j] === ' ') {
			// Skip over spaces in the user input
			j++;
			i--; // Recheck the current position in the next loop iteration
		}
	}

	// Join the array back into a string
	result = result.join('');

	// Update the input value and set the cursor position
	submitInput.value = result;
	submitInput.setSelectionRange(cursorPosition, cursorPosition);

};
submitInput.addEventListener("click", function () {
	if (submitInput.value == inputFill) {
		submitInput.setSelectionRange(0, 0);
	}
})
submitBtn.addEventListener("click", function () {
	curvalue = submitInput.value;
	if (curvalue.toLowerCase() == currentAnswer) {
		eventP.innerHTML = "<b style='color:green;'>Correct Answer!</b>";
		completedCode = currentSection + ":" + currentProblem;
		if (completed.includes(completedCode) == false) {
			completed.push(completedCode);
		}
		nextBtn.classList.remove("hide");
	} else {
		eventP.innerHTML = "<b style='color:red;'>Wrong Answer!</b>";
	}
	setTimeout(clearP, 2000);
});
backBtn.addEventListener("click", function () {
	if (currentProblem > 1) {
		currentProblem -= 1;
		nextBtn.classList.remove("hide");
		genAnswer(Object.keys(puzzles)[currentSection], currentProblem);
		problemP.innerHTML = "Problem " + currentProblem;
		if (currentProblem == 1) {
			backBtn.classList.add("hide");
		}
	}
});
nextBtn.addEventListener("click", function () {
	next = puzzles[Object.keys(puzzles)[currentSection]]["problem" + (currentProblem + 1)];
	completedCode = currentSection + ":" + (currentProblem);
	if (completed.includes(completedCode)) {
		currentProblem += 1;
		backBtn.classList.remove("hide");
		if (currentProblem - 1 == Object.keys(puzzles[Object.keys(puzzles)[currentSection]]).length) {
			omegaDiv.classList.remove("hide");
			omegaP.innerHTML = Object.keys(puzzles)[currentSection].toUpperCase();
			document.querySelectorAll("[data-level='" + Object.keys(puzzles)[currentSection] + "']").forEach(function (element) {
				element.innerHTML = element.innerHTML.replace("The ???", Object.keys(puzzles)[currentSection]);
			});
			if (completedSections.includes(currentSection) == false) {
				completedSections.push(currentSection);
			}
			currentSection = 0;
			currentProblem = 1;
			byId("problems").classList.add("hide");
			backBtn.classList.add("hide");
			nextBtn.classList.add("hide");

		} else {
			problemP.innerHTML = "Problem " + currentProblem;
			genAnswer(Object.keys(puzzles)[currentSection], currentProblem);
		}

	}
});
hintBtn.addEventListener("click", function () {
	if (inputFill.charAt(0) == "-") {
		inputFill = currentAnswer.charAt(0) + inputFill.substring(1);
	}
	submitInput.value = inputFill;

});
document.querySelectorAll(".level-link").forEach((element) => {
	element.addEventListener("click", () => {
		level = element.getAttribute("data-level");
		byId("problems").classList.remove("hide");
		currentProblem = 1;
		if (isNaN(level)) {
			for (let i = 0; i < Object.keys(puzzles).length; i++) {
				if (Object.keys(puzzles)[i] == level) {
					currentSection = i;
				}
			}
			genAnswer(level, 1);

		} else {
			currentSection = level;
			genAnswer(Object.keys(puzzles)[Number(level)], 1);

		}
		problemP.innerHTML = "Problem 1";
		backBtn.classList.add("hide");

	});
});
omegaBtn.addEventListener("click", () => {
	omegaDiv.classList.add("hide");
});