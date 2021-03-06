window.onload = pageLoad;

function pageLoad() {
	toggleFunction();
	var btnStart = document.getElementById('start');
	btnStart.onclick = startGame;
}

function startGame() {
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart() {
	var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min * 60; // 30 seconds
	var x = document.getElementById('clock');
	timer = setInterval(timeCount, TIMER_TICK); // timeCount(30s) , timerTick(1s)
	function timeCount() {
		second = second - 1; // countdown -1 sec
		x.innerHTML = second;
		var allbox = document.querySelectorAll("#squares-layer div");	
		if(allbox.length <= 0){ // All box are clear >> timer stop and call clear screen function
			alert(second + "s Congratulation! You Win!!");
			clearScreen();
			clearInterval(timer);
			timer = null;

		}
		else if(second == 0){
			alert('You Lose')
			clearInterval(timer);
			timer = null;
			clearScreen();
		}
	}
}

function addBox() {

	var numbox = document.getElementById('numbox').value; // Count of Box
	var parseIntNumber = parseInt(numbox); // Change String to Int
	var squaresLayer = document.getElementById('squares-layer') // Call ID from HTML
	var colorDrop = document.getElementById('color').value;
	for (var i = 0; i < parseIntNumber; i++) {
		var tempbox = document.createElement('div');
		tempbox.className = "square";
		tempbox.id = "box" + i;
		tempbox.style.backgroundColor = colorDrop;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		squaresLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box) {
	let currentBoxInContainer = document.getElementById('squares-layer'); // Click to Destroy Box
	box.onclick = function () {
		currentBoxInContainer.removeChild(box);
	}
}

function clearScreen(){
	var allbox = document.querySelectorAll("#squares-layer div");
	var containerBox = document.getElementById('squares-layer');			

	//delete all  squares
	for (var i=0;i<allbox.length;i++){
		containerBox.removeChild(allbox[i]);
	}
}

function toggleFunction() {
    let btnHamburger = document.getElementById('hamburger');
    let containerHamburger = document.getElementsByClassName('hamburger-toggle');
    let navbarInside = document.getElementsByClassName('navbar-inside');
    let navbarBox = document.getElementsByClassName('navbar-box');
    btnHamburger.onclick = function(){
        containerHamburger[0].classList.toggle("change");
        navbarInside[0].classList.toggle("navbar-inside-open");
        navbarBox[0].classList.toggle("navbar-box-open");
    }
}