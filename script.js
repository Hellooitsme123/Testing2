function byId(id) {
	return document.getElementById(id);
}
function randItem(arr) {
	return arr[Math.floor(Math.random()*arr.length)];
}
function randNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
  }
var score = 0;
var input = byId('input');
var scoretxt = byId('score');
var box = byId('box');
var submitbtn = byId('submit');
var colors = {
	blue: {
		name: 'blue',
		color: 'rgb(0,0,255)',
		desc: 'Add the number.',
		limit: [0,1000],
		modlimit: [0,1000],
	},
	red: {
		name: 'red',
		color: 'rgb(255,0,0)',
		desc: 'Subtract the number.',
		limit: [0,1000],
		modlimit: [0,1000],
		mult: 1.5,
	},
	purple: {
		name: 'purple',
		color: 'rgb(100,20,120)',
		desc: 'Multiply the number.',
		limit: [0,500],
		modlimit: [1,20],
	},
	green: {
		name: 'green',
		color: 'rgb(100,212,10)',
		desc: 'Divide the number.',
		limit: [0,500],
		modlimit: [1,20],
	},
	almond: {
		name: 'almond',
		color: 'rgb(230,215,175)',
		desc: 'Square root of the number.',
		limit: [0,500],
		modlimit: false,
		modampmode: "nomod",
	},
	teal: {
		name: 'teal',
		color: 'rgb(0,235,190)',
		desc: 'Mean difference with the pair. Mean of (n[0]-m) and (n[1]-m).',
		limit: [0,500],
		modlimit: [0,500],
		limitmode: 2,
	},
	yellow: {
		name: 'yellow',
		color: 'rgb(255,235,50)',
		desc: 'a^2 + b^2 = ?. Answer with c^2, not c.',
		limit: [0,80],
		modlimit: [0,80],
		scoremult: 2,
	},
	crimson: {
		name: 'crimson',
		color: 'rgb(120,35,35)',
		desc: 'Replicate a fibonacci sequence.<br>Example:n[0] = 5, n[1] = 10, m = 3. 5+10 = 15 (1 completed), 10+15 = 25 (2 completed), 15+25 = 40 (3 completed). k = 40.',
		limit: [1,80],
		modlimit: [2,5],
		limitmode: 2,
		scoremult: 2,
	},
	limepurple: {
		name: 'limepurple',
		color: 'linear-gradient(to bottom, rgb(160,255,50) 0%, rgb(160,255,50) 50%, rgb(100,20,210) 50%, rgb(100,20,210) 100%)',
		desc: 'Find the least common multiple of n and m.',
		limit: [1,80],
		modlimit: [1,80],
	},
	limegreen: {
		name: 'limegreen',
		color: 'linear-gradient(to bottom, rgb(160,255,50) 0%, rgb(160,255,50) 50%,rgb(0,212,10) 50%, rgb(0,212,10) 100%)',
		desc: 'Find the greatest common factor of n and m.',
		limit: [1,160],
		modlimit: [1,160],
		scoremult: 2.5,
	},
	black: {
		name: 'black',
		color: 'rgb(0,0,0)',
		desc: 'Find the logarithm of n with base m.',
		limit: [1,1000],
		modlimit: [1,10],
		scoremult: 3,
		css: {color: "rgb(255,255,255)",border:"5px solid rgb(100,100,100)"},
	},
	slate: {
		name: 'slate',
		color: 'rgb(85,100,130)',
		desc: 'Find (n^2+m^2)/(n+m).',
		limit: [1,80],
		modlimit: [1,80],
		scoremult: 6,
	},
	amber: {
		name: 'amber',
		color: 'rgba(255,160,50,1)',
		desc: 'Double the digits and then move them 1 to the left.<br>Example: 94. 9->18, 4->8. 188->881.',
		limit: [11,100],
		modlimit: false,
		scoremult: 1.5,
		modampmode: "nomod",
		css: {boxshadow:"box-shadow?4px 4px 1px 3px inset rgba(220,120,30,0.8), -4px -4px 1px 3px inset rgba(220,120,30,0.8)",},
	},
	gold: {
		name: 'gold',
		color: 'rgb(225,205,20)',
		desc: 'Halve the number.',
		limit: [2,5000],
		modlimit: false,
		scoremult: 1,
		modampmode: "nomod",
	},
	inverto: {
		name: 'inverto',
		color: 'linear-gradient(45deg, rgb(100,20,255) 0%, rgb(100,20,255) 50%,rgb(180,255,50) 50%, rgb(180,255,50) 100%)',
		desc: 'Find what percent of m is n.',
		limit: [1,500],
		modlimit: [1,500],
		scoremult: 3,
	},
	crimsonamber: {
		name: 'crimsonamber',
		color: 'linear-gradient(to bottom,rgba(255,160,50,1) 0%, rgb(255,160,50) 50%, rgb(120,35,35) 50%, rgb(120,35,35) 100%)',
		desc: 'Add the two digits and then rotate to the left m times.<br>Example: n[0] = 11, n[1] = 50, m = 2. 11+50 = 61, 61->16. 16+50 = 66, 66->66.',
		limit: [11,80],
		modlimit: [2,5],
		scoremult: 3,
		limitmode: 2,
		css: {boxshadow:"box-shadow?4px 4px 1px 3px inset rgba(220,120,30,0.8), -4px -4px 1px 3px inset rgba(100,20,20,0.8)",},
	},
};
var correct = 0;
var correctanswer = 0;
var num = 0;
var mod = 0;
var inputval = 0;
var numtxt = byId("num");
var modtxt = byId("mod");
var desctxt = byId("desctxt");
var currentcolor;
var scoreinc;
function gcd(a, b) { 
    for (let temp = b; b !== 0;) { 
        b = a % b; 
        a = temp; 
        temp = b; 
    } 
    return a; 
} 
  
function lcm(a, b) { 
    let gcdValue = gcd(a, b); 
    return (a * b) / gcdValue; 
}
function logb(log, base) {
	return Math.log(log)/Math.log(base); 
}
function numDigits(n) {
	let cnt = 0;
	while (n > 0) {
		cnt++;
		n = parseInt(n / 10, 10);
	}
	return cnt;
}
function leftShift(num,iterations) {
	var temp  = String(num);
	for( let i = 0; i <iterations; i++){
		temp = temp.substring(1)+temp.substring(0,1);
	}
	return Number(temp);
}
function doubleDigits(num) {
	let digits = numDigits(num);
	let tempstr = "";
	let numstr = String(num);

	for (let i = 0; i < digits; i++) {
		let zenum = Number(numstr.substring(i,i+1))*2;
		tempstr += zenum;
	}
	return Number(tempstr);
}
function newbox() {
	let newbox = colors[randItem(Object.keys(colors))];
	box.style.background = newbox.color;
	currentcolor = newbox.name;
	if (Object.hasOwn(newbox,"css")) {
		for (let i =0; i < Object.keys(newbox.css).length; i++) {
			let tempcss = newbox.css[Object.keys(newbox.css)[i]];
			let realprop = Object.keys(newbox.css)[i];
			if (tempcss.includes("?")) {
				realprop = tempcss.split("?")[0];
				tempcss = tempcss.split("?")[1];
			}
			box.style[realprop] = tempcss;
		}
	} else {
		box.style.color = "rgb(0,0,0)";
		box.style.border = "5px solid black";
		box.style.boxShadow = "none";
	}
	if (Object.hasOwn(newbox,"limitmode")) {
		if (isNaN(newbox.limitmode) == false) {
			num = [];
			for (let i =0; i < newbox.limitmode; i++) {
				num.push(randNum(newbox.limit[0],newbox.limit[1]));
			}
		}
	} else {
		num = randNum(newbox.limit[0],newbox.limit[1]);
	}
	
	if (Object.hasOwn(newbox,"modampmode")) {
		if (newbox.modampmode == "nomod") {
			mod = "";
		}	
		if (newbox.modampmode == "mult") {
			let modamp = randNum(newbox.modlimit[0],newbox.modlimit[1]);
			mod = Math.round(num*modamp);
		}	
	} else {
		mod = randNum(newbox.modlimit[0],newbox.modlimit[1]);
	}
	
	
	input.value = "";
	if (newbox.name == 'blue') {
		correctanswer = num+mod;
	}
	if (newbox.name == 'red') {
		correctanswer = num-mod;
	}
	if (newbox.name == 'purple') {
		correctanswer = num*mod;
	}
	if (newbox.name == 'green') {
		correctanswer = Math.round(num/mod);
	}
	if (newbox.name == 'almond') {
		correctanswer = Math.round(Math.sqrt(num));
	}
	if (newbox.name == 'teal') {
		correctanswer = Math.round((Math.abs(num[0]-mod)+Math.abs(num[1]-mod))/2);
	}
	if (newbox.name == 'yellow') {
		correctanswer = Math.pow(num,2)+Math.pow(mod,2);
	}
	if (newbox.name == 'crimson') {
		if (num[0] > num[1]) {
			num[1] = num[0]+num[1];
		}
		let newnum = num[1];
		let lastnum = num[0];
		let newnum2 = 0;
		for (let i =0; i < mod; i++) {
			newnum2 = newnum;
			newnum = newnum+lastnum;
			lastnum = newnum2;
		}
		correctanswer = newnum;

	}
	if (newbox.name == 'limepurple') {
		correctanswer = lcm(num,mod);
	}
	if (newbox.name == 'limegreen') {
		correctanswer = gcd(num,mod);
	}
	if (newbox.name == 'black') {
		correctanswer = Math.round(logb(num,mod));
	}
	if (newbox.name == 'slate') {
		correctanswer = Math.round((Math.pow(num,2)+Math.pow(mod,2))/(num+mod));
	}
	if (newbox.name == 'amber') {
		correctanswer = leftShift(doubleDigits(num),1);
	}
	if (newbox.name == 'gold') {
		correctanswer = Math.round(num/2);
	}
	if (newbox.name == 'inverto') {
		if (num > mod) {
			mod = num+mod;
		}
		correctanswer = Math.round((num/mod)*100);
	}
	if (newbox.name == 'crimsonamber') {
		if (num[0] > num[1]) {
			num[1] = num[0]+num[1];
		}
		let newnum = num[1];
		let lastnum = num[0];
		let newnum2 = 0;
		for (let i =0; i < mod; i++) {
			newnum2 = newnum;
			newnum = leftShift(newnum+lastnum,1);
			lastnum = newnum2;
		}
		correctanswer = newnum;
	}

	scoreinc = Math.max(Math.round(Math.log(Math.abs(correctanswer))/1.5),1);
	if (Object.hasOwn(newbox,"scoremult")) {
		scoreinc *= newbox.scoremult;
	}

	//text
	numtxt.innerHTML = num;
	modtxt.innerHTML = mod;
	desctxt.innerHTML = newbox.desc;
	//
	correctanswer = String(correctanswer);
	score += scoreinc;
}
function update() {
	scoretxt.innerHTML = "Score: "+score;
	inputval = input.value;
	if (inputval == correctanswer) {
		newbox()
	} else {
		window.alert("WRONG!");
	}
}
update();
submitbtn.addEventListener('click',function() {
	update();
});
function endScore() {
	scoretxt.innerHTML = "Game over! End Score: "+score;
	submitbtn.style.display = "none";
}
window.setTimeout(endScore,60000);