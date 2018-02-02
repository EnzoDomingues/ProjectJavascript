//Menu Responsive

/*! apollo.js v1.7.0 | (c) 2014 @toddmotto | https://github.com/toddmotto/apollo */
!function (n, t) { "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t : n.apollo = t() }(this, function () { "use strict"; var n, t, s, e, o = {}, c = function (n, t) { "[object Array]" !== Object.prototype.toString.call(n) && (n = n.split(" ")); for (var s = 0; s < n.length; s++)t(n[s], s) }; return "classList" in document.documentElement ? (n = function (n, t) { return n.classList.contains(t) }, t = function (n, t) { n.classList.add(t) }, s = function (n, t) { n.classList.remove(t) }, e = function (n, t) { n.classList.toggle(t) }) : (n = function (n, t) { return new RegExp("(^|\\s)" + t + "(\\s|$)").test(n.className) }, t = function (t, s) { n(t, s) || (t.className += (t.className ? " " : "") + s) }, s = function (t, s) { n(t, s) && (t.className = t.className.replace(new RegExp("(^|\\s)*" + s + "(\\s|$)*", "g"), "")) }, e = function (e, o) { (n(e, o) ? s : t)(e, o) }), o.hasClass = function (t, s) { return n(t, s) }, o.addClass = function (n, s) { c(s, function (s) { t(n, s) }) }, o.removeClass = function (n, t) { c(t, function (t) { s(n, t) }) }, o.toggleClass = function (n, t) { c(t, function (t) { e(n, t) }) }, o });

(function () {

	// cria um novo elemento
	var mobile = document.createElement('div');

	// adiciona uma classe ao novo elemento
	mobile.className = 'menu-mobile';

	// coloca a nova tag no codigo fonte
	document.querySelector('.menu').appendChild(mobile);

	// seleciona a nav-mobile no codigo fonte
	var mobileNav = document.querySelector('.menu-mobile');

	// seleciona o nav-list
	var toggle = document.querySelector('.menu-list');

	mobileNav.onclick = function () {
		apollo.toggleClass(mobileNav, 'menu-mobile-open');
		apollo.toggleClass(toggle, 'menu-active');
	}
})();
//---Menu Responsive


//Carrosel

var satual = 1;
var smax = 4;
var stmp = 1000;


var troca = () => {
	if (satual > smax) {
		this.satual = 1;
	} else
		if (satual < 1) {
			satual = smax;
		}

	document.getElementById('b' + satual).style.visibility = 'visible';
}

var recebe = (evt) => {
	document.getElementById('b' + satual).style.visibility = 'hidden';

	if (evt) {
		switch (evt.target.id) {
			case 'right-arrow':
				satual++;
				console.log(document.getElementById('b' + satual));
				clearInterval(window.sliderTimer);
				window.timerOut = setTimeout(slider(satual), 3000);
				break;
			case 'left-arrow':
				satual--;
				clearInterval(window.sliderTimer);
				window.timerOut = setTimeout(slider(satual), 3000);
				break;
		}
	}else {
		satual++;
	}

	troca();
}

var slider = () => {
	clearTimeout(window.timerOut);
	document.getElementById('b1').style.visibility = 'visible';
	document.getElementById('b2').style.visibility = 'hidden';
	document.getElementById('b3').style.visibility = 'hidden';
	document.getElementById('b4').style.visibility = 'hidden';
	window.sliderTimer = setInterval(recebe, stmp);
}
slider();


var arrowLeft = document.getElementById('left-arrow');
var arrowRight = document.getElementById('right-arrow');


arrowLeft.addEventListener('click', recebe);
arrowRight.addEventListener('click', recebe);

// bolls
	var boll = (event) => {
		document.getElementById('b' + satual).style.visibility = 'hidden';

		if (event) {
			switch (event.target.id) {
				case 'slide1':
					satual = 1;
					clearInterval(window.sliderTimer);
					break;
				case 'slide2':
					satual = 2;
					clearInterval(window.sliderTimer);
					break;
					case 'slide3':
					satual = 3;
					clearInterval(window.sliderTimer);
					break;
					case 'slide4':
					satual = 4;
					clearInterval(window.sliderTimer);
					break;
			}
		}
		troca();
	}
	var bol1 = document.getElementById('slide1');
	var bol2 = document.getElementById('slide2');
	var bol3 = document.getElementById('slide3');
	var bol4 = document.getElementById('slide4');

	bol1.addEventListener('click', boll);
	bol2.addEventListener('click', boll);
	bol3.addEventListener('click', boll);
	bol4.addEventListener('click', boll);

	var currentBolls = (evt) => {
		var arr = []
		var header = document.getElementById('bols-navigation');
		var bntBols = document.getElementsByClassName('bolls');
		var currentItemEvt;
		var currentItemEl;

		for(var i = 0; i < bntBols.length; i++){
			currentItemEl = bntBols[i];

			arr.push(currentItemEl);

			bntBols[i].addEventListener('click', (evt) => {
				currentItemEvt = evt.target;
				arr.filter((el, index) => {
						if (currentItemEvt == el){
							currentItemEvt.classList.add('active');
						} else {
							el.classList.remove('active');
						}
				})
			});
		}
	}
	currentBolls();

	

//--bolls

//--Carrosel