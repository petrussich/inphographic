var firstMove = true;
var active;
var tl;

var g = document.getElementById('green');
var o = document.getElementById('orange');
var b = document.getElementById('blue');
var r = document.getElementById('red');

var dc = document.getElementById('discoveryChart');

function setup() {
	TweenMax.set('#chart', {scale: 0});
	TweenMax.set('#lines', {scale: 1.5 });
	TweenMax.set(['#description h2', '#titleOne h2','#titleTwo h2','#titleThree h2','#titleFour h2'], { x: '-=8' });
	TweenMax.to('#preloader', 0.25, { autoAlpha: 0 });
	animate();
	listeners();
};

function animate() {
	TweenMax.to(['#line1','#line2','#line3','#line4'], 1.25, { strokeDashoffset: 50, ease: Power3.easeInOut });
	TweenMax.to('#chart', 1.5, { scale: 1, ease: Power3.easeOut, delay: .84 });
	TweenMax.to(['#description h2', '#description p'], 1.5, { x: 0, autoAlpha: 1, ease: Power3.easeOut });
	
	tl = new TimelineMax();
}; 

function listeners() {
	
	g.addEventListener('click', highlightGreen);
	
	o.addEventListener('click', highlightOrange);
	
	b.addEventListener('click', highlightBlue);
	
	r.addEventListener('click', highlightRed);

};

function removeDescription() {
	TweenMax.to(['#description h2', '#description p'], 1, { autoAlpha: 0, ease: Linear.easeNone });
};

function highlightGreen() {

	removeDescription();
	
	if (active === 'orange') {
		placeOrange();
	} else if (active === 'blue') { 
		placeBlue();
 	} else if (active === 'red') {
		placeRed();
	}
	
	active = 'green';
	
	tl.to('#green', .5, { x: -10, y: -10, ease: Power3.easeOut });
	tl.to('#discoveryTextContainer', .5, { borderLeft: '6px solid #BCCF00', ease: Linear.easeNone });
	tl.to('#titleOne h2', .5, { x: 0, autoAlpha: 1, ease: Linear.easeNone }, '-=0.5');
	tl.to('#titleOne p', .5, { autoAlpha: 1, ease: Linear.easeNone }, '-=.2');	
	
};
function placeGreen() {
	tl.to('#green', .5, { x: 0, y: 0, ease: Power3.easeOut });
	tl.to('#discoveryTextContainer', .5, { borderLeft: '0px solid #EEE', ease: Linear.easeNone });
	tl.to('#titleOne h2', .5, { x: '-=8', autoAlpha: 0, ease: Linear.easeNone }, '-=0.5');
	tl.to('#titleOne p', .5, { autoAlpha: 0, ease: Linear.easeNone }, '-=.5');
};

function highlightOrange() {
	
	removeDescription();
	
	if (active === 'blue') {
		placeBlue();
	} else if (active === 'green') { 
		placeGreen();
 	} else if (active === 'red') {
		placeRed();
	}
	
	active = 'orange';
	
	tl.to('#orange', .5, { x: 8, y: -10, ease: Power3.easeOut });
	tl.to('#discoveryTextContainer', .5, { borderLeft: '6px solid #F6A000', ease: Linear.easeNone });
	tl.to('#titleTwo h2', .5, { x: '0', autoAlpha: 1, ease: Linear.easeNone }, '-=0.5');
	tl.to('#titleTwo p', .5, { autoAlpha: 1, ease: Linear.easeNone }, '-=.2');
};
function placeOrange() {
	tl.to('#orange', .5, { x: 0, y: 0, ease: Power3.easeOut });
	tl.to('#discoveryTextContainer', .5, { borderLeft: '0px solid #EEE', ease: Linear.easeNone });
	tl.to('#titleTwo h2', .5, { x: '-=8', autoAlpha: 0, ease: Linear.easeNone }, '-=0.5');
	tl.to('#titleTwo p', .5, { autoAlpha: 0, ease: Linear.easeNone }, '-=.5');
};

function highlightBlue() {
	
	removeDescription();
	
	if (active === 'green') {
		placeGreen();
	} else if (active === 'orange') { 
		placeOrange();
 	} else if (active === 'red') {
		placeRed();
	}
	
	active = 'blue';
	
	tl.to('#blue', .5, { x: -2, y: 12, ease: Power3.easeOut });
	tl.to('#discoveryTextContainer', .5, { borderLeft: '6px solid #009FE3', ease: Linear.easeNone });
	tl.to('#titleThree h2', .5, { x: '0', autoAlpha: 1, ease: Linear.easeNone }, '-=0.5');
	tl.to('#titleThree p', .5, { autoAlpha: 1, ease: Linear.easeNone }, '-=.2');
};
function placeBlue() {
	tl.to('#blue', .5, { x: 0, y: 0, ease: Power3.easeOut });
	tl.to('#discoveryTextContainer', .5, { borderLeft: '0px solid #EEE', ease: Linear.easeNone });
	tl.to('#titleThree h2', .5, { x: '-=8', autoAlpha: 0, ease: Linear.easeNone }, '-=0.5');
	tl.to('#titleThree p', .5, { autoAlpha: 0, ease: Linear.easeNone }, '-=.5');
};

function highlightRed() {
	
	removeDescription();
	
	if (active === 'orange') {
		placeOrange();
	} else if (active === 'blue') { 
		placeBlue();
 	} else if (active === 'green') {
		placeGreen();
	}
	
	active = 'red';
	
	tl.to('#red', .5, { x: 10, y: 4, ease: Power3.easeOut });
	tl.to('#discoveryTextContainer', .5, { borderLeft: '6px solid #E84E0F', ease: Linear.easeNone });
	tl.to('#titleFour h2', .5, { x: '0', autoAlpha: 1, ease: Linear.easeNone }, '-=0.5');
	tl.to('#titleFour p', .5, { autoAlpha: 1, ease: Linear.easeNone }, '-=.2');
};
function placeRed() {
	
	tl.to('#red', .5, { x: 0, y: 0, ease: Power3.easeOut });
	tl.to('#discoveryTextContainer', .5, { borderLeft: '0px solid #EEE', ease: Linear.easeNone });
	tl.to('#titleFour h2', .5, { x: '-=8', autoAlpha: 0, ease: Linear.easeNone }, '-=0.5');
	tl.to('#titleFour p', .5, { autoAlpha: 0, ease: Linear.easeNone }, '-=.5');

};

document.addEventListener("DOMContentLoaded", setup);