var randC;
var randA;
var randB;

function randomResult(min, max) {
randC = min + Math.random() * (max + 1 - min);
randC = Math.floor(randC);
return randC;

}

function randomNumbersAB(min, max) {
randA = min + Math.random() * (max + 1 - min);
randA = Math.floor(randA);
randB = randomResult(11,14) - randA

return randA, randB;
}

randomNumbersAB(6, 9);


function setVal() {
     document.getElementById('numberA').innerHTML = randA;   
     document.getElementById('numberB').innerHTML = randB;   
     document.getElementById('numberC').innerHTML = "?";   
    };

setVal();


var ScaleSizestrelkaA = 1 + 0.17 * (randA - 6);
var sizeScalestrelkaA = 'scale' + '(' + ScaleSizestrelkaA + ')' ;

var ScaleSizestrelkaB = 1 + 0.17 * (randB - 6);
var sizeScalestrelkaB = 'scale' + '(' + ScaleSizestrelkaB + ')' ;

//добавление стрелки А
var arrowA	=	document.createElement ('div');
arrowA.classList.add ('strelka');


var	srelkaBoxA = document.querySelector ('.strelkaA');
srelkaBoxA.appendChild (arrowA);

var sizestrelkaA = document.querySelector('.strelkaA');
sizestrelkaA.style.transform = sizeScalestrelkaA;



var ScalesizeinpNumbA = 1 / ScaleSizestrelkaA;
var sizeScalsizeinpNumbA = 'scale' + '(' + ScalesizeinpNumbA + ')' ;

var	sizeinpNumbA =	document.querySelector ('.inputNumbA');
sizeinpNumbA.style.transform = sizeScalsizeinpNumbA;




// получаем число с inputA



document.getElementById('inputNumbA').addEventListener("change", GETinputNumbA);


function GETinputNumbA () {
							var GETNumbA = document.getElementById('inputNumbA');
							var valGETNumbA = GETNumbA.value;
							
	if (valGETNumbA == randA) {
		GETNumbA.style.color = "black";
		document.getElementById('numberA').style.background = "none";
		
		var replaceCorrectlyValA = document.querySelector ('.strelkaA');
		replaceCorrectlyValA.insertAdjacentHTML ('afterbegin', '<div class="CorrectlyValstyleA"></div>');
		var eeeeeeee = document.querySelector ('.CorrectlyValstyleA');
		eeeeeeee.innerHTML = valGETNumbA;
		eeeeeeee.style.transform = sizeScalsizeinpNumbA;



		var remInputA = document.getElementById ('inputNumbA');
		remInputA.remove();

//добавление стрелки В

var	widthSrelkaBoxA =	document.querySelector ('.strelkaA');
widthSrelkaBoxA.style.width = 201 + 36 * (randA - 6) + 'px';


		var arrowB = document.createElement ('div');
		arrowB.classList.add ('strelka');

		var bbbinputB = document.createElement ('input');
		bbbinputB.classList.add ('inputNumbB');
		

		var	srelkaBoxB = document.querySelector ('.strelkaB');
		srelkaBoxB.appendChild (arrowB);
		srelkaBoxB.insertBefore (bbbinputB, srelkaBoxB.firstChild);

		var addIDbbbinputB = document.querySelector ('.inputNumbB');
		addIDbbbinputB.id = 'inputNumbB';

		var sizestrelkaB = document.querySelector ('.strelkaB');
		sizestrelkaB.style.transform = sizeScalestrelkaB;

		var ScalesizeinpNumbB = 1 / ScaleSizestrelkaB;
		var sizeScalsizeinpNumbB = 'scale' + '(' + ScalesizeinpNumbB + ')' ;

		var	sizeinpNumbB =	document.querySelector ('.inputNumbB');
		sizeinpNumbB.style.transform = sizeScalsizeinpNumbB;



// получаем число с inputB
		document.getElementById('inputNumbB').addEventListener("change", GETinputNumbB);

// проверка числа с inputB
	
			function GETinputNumbB () {
				var GETNumbB = document.getElementById('inputNumbB');
				var valGETNumbB = GETNumbB.value;
				
				if (valGETNumbB == randB) {
		GETNumbB.style.color = "black";
		document.getElementById('numberB').style.background = "none";
		
		var replaceCorrectlyValB = document.querySelector ('.strelkaB');
		replaceCorrectlyValB.insertAdjacentHTML ('afterbegin', '<div class="CorrectlyValstyleB"></div>');
		var rrrrrrr = document.querySelector ('.CorrectlyValstyleB');
		rrrrrrr.innerHTML = valGETNumbB;
		rrrrrrr.style.transform = sizeScalsizeinpNumbB;

		var remInputB = document.getElementById ('inputNumbB');
		remInputB.remove();


//добавление рамки полю с результатом, очистка содержимого замена на input
				var resultaddBorder = document.getElementById('numberC');
				resultaddBorder.remove();
				var replaceInputValC = document.querySelector ('.data');
				replaceInputValC.insertAdjacentHTML ('beforeend', '<input type="text" class="numberC"/>');

				var inputcccc = document.querySelector ('.numberC');
				inputcccc.id = 'numberC';

// проверяем вводимые значения в поле результат
				document.getElementById('numberC').addEventListener("change", GETinputNumbС);

				function GETinputNumbС () {
								var GETNumbС = document.getElementById('numberC');
								var valGETNumbС = GETNumbС.value;
								
								if (valGETNumbС == randC) {
									
		GETNumbС.style.color = "black";
		
		var remInputB = document.getElementById ('numberC');
		remInputB.remove();

		var replaceCorrectlyValC = document.querySelector ('.data');
		replaceCorrectlyValC.insertAdjacentHTML ('beforeend', '<div class="numberCrepl"></div>');
		var ccccc = document.querySelector ('.numberCrepl');
		ccccc.innerHTML = valGETNumbС;

		
		
		alert("Пример решен правильно");

			} else { 
			GETNumbС.style.color = "red";
					}

			};

			} else { 
			GETNumbB.style.color = "red";
			document.getElementById('numberB').style.background = "orange";
					}
			};

	} else { 
		GETNumbA.style.color = "red";
		document.getElementById('numberA').style.background = "orange";
			}
}









