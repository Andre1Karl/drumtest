document.querySelector('body').addEventListener('keydown',key);

function key(x){
	if (x.keyCode==65){
		clap();
	}
	if (x.keyCode==83){
		hihat();
	}
	if (x.keyCode==68){
		kick();
	}
	if (x.keyCode==70){
		openhat();
	}
	if (x.keyCode==71){
		boom();
	}
	if (x.keyCode==72){
		ride();
	}
	if (x.keyCode==74){
		snare();
	}
	if (x.keyCode==75){
		tom();
	}
	if (x.keyCode==76){
		tink();
	}
}

function clap(){
	var clap = new Audio('sound/clap.wav');
	clap.play();
}
function hihat(){
	var hihat = new Audio('sound/hihat.wav');
	hihat.play();
}
function kick(){
	var kick = new Audio('sound/kick.wav');
	kick.play();
}
function openhat(){
	var openhat = new Audio('sound/openhat.wav');
	openhat.play();
}
function boom(){
	var boom = new Audio('sound/boom.wav');
	boom.play();
}
function ride(){
	var ride = new Audio('sound/ride.wav');
	ride.play();
}
function snare(){
	var snare = new Audio('sound/snare.wav');
	snare.play();
}
function tom(){
	var tom = new Audio('sound/tom.wav');
	tom.play();
}
function tink(){
	var tink = new Audio('sound/tink.wav');
	tink.play();
}