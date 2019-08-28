//	Obtenemos	el	button	y	lo	almacenamos	en	una	variable	llamada	"btn"
var btnS	= document.getElementById("btnS");
var btnR = document.getElementById("btnR");
var btnM = document.getElementById("btnM");
var btnD = document.getElementById("btnD");
/*	Obtenemos	el	div	que	muestra	el	resultado	y	lo
almacenamos	en	una	variable	llamada	"resultado"	*/
var resultado	= document.getElementById("resultado")
/*	Obtenemos	los	dos	input	y	los	almacenamos	en	
variables	"inputUno"	y	"inputDos"	*/
var inputUno	= document.getElementById("input-uno");
var inputDos	= document.getElementById("input-dos");
//obtenemos el div para los mensajes de error.
var error1 = document.getElementById("numero1");
var error2 = document.getElementById("numero2");
//	Añadimos	el	evento	click	a	la	variable	"btn"
btnS.addEventListener("click",function(){
	/*	Obtenemos	el	valor	de	cada	input	accediendo	a
	su	atributo	"value"	*/
	var n1	= inputUno.value;
    var n2	= inputDos.value;
	/*	Llamamos	a	una	función	que	permite	realizar	la
	suma	de	los	números	y	los	mostramos	al	usuario"	*/
    resultado.innerHTML = suma(n1,n2);
});

btnR.addEventListener("click",function(){
    var n1 = inputUno.value;
    var n2 = inputDos.value;

    resultado.innerHTML = resta(n1,n2);

});

btnD.addEventListener("click",function(){
    var n1 = inputUno.value;
    var n2 = inputDos.value;

    resultado.innerHTML = dividir(n1,n2);
});

btnM.addEventListener("click",function(){
    var n1 = inputUno.value;
    var n2 = inputDos.value;

    resultado.innerHTML = multiplicar(n1,n2);
});

/*	Función	que	retorna	la	suma	de	dos	números	*/
function suma(n1, n2){
    if(isNumber(n1)){
        if(isNumber(n2)){
            if(esEntero(n1)){
                if(esEntero(n2)){
                    error1.innerHTML = "";
                    error2.innerHTML = "";
                    return parseInt(n1)+parseInt(n2);
                }else{
                    error1.innerHTML = "";
                    error2.innerHTML= "ERROR: El segundo valor no número entero, intente nuevamente.";
                }
            }else{
                error2.innerHTML = "";
                error1.innerHTML = "ERROR: El primer valor no es número entero, intente nuevamente.";
            }
        }else{
            error1.innerHTML = "";
            error2.innerHTML= "ERROR: El segundo valor no es un número, intente nuevamente.";
        }
    }else{
        error2.innerHTML = "";
        error1.innerHTML = "ERROR: El primer valor no es un número, intente nuevamente.";
    }
}

// funcion para resta
function resta(n1, n2){
    if(isNumber(n1)){
        if(isNumber(n2)){
            if(esEntero(n1)){
                if(esEntero(n2)){
                    error1.innerHTML = "";
                    error2.innerHTML = "";
                    return parseInt(n1)-parseInt(n2);
                }else{
                    error1.innerHTML = "";
                    error2.innerHTML= "ERROR: El segundo valor no número entero, intente nuevamente.";
                }
            }else{
                error2.innerHTML = "";
                error1.innerHTML = "ERROR: El primer valor no es número entero, intente nuevamente.";
            }
        }else{
            error1.innerHTML = "";
            error2.innerHTML= "ERROR: El segundo valor no es un número, intente nuevamente.";
        }
    }else{
        error2.innerHTML = "";
        error1.innerHTML = "ERROR: El primer valor no es un número, intente nuevamente.";
    }
}

//funcion para dividir dos números
function dividir(n1,n2){
    if(isNumber(n1)){
        if(isNumber(n2)){
            if(esEntero(n1)){
                if(esEntero(n2)){
                    if(parseInt(n2)!=0){
                        error1.innerHTML = "";
                        error2.innerHTML = "";
                        return parseInt(n1)/parseInt(n2);
                    }else{
                        error1.innerHTML = "";
                        error2.innerHTML= "ERROR: El segundo número no puede ser 0.";
                    }
                }else{
                    error1.innerHTML = "";
                    error2.innerHTML= "ERROR: El segundo valor no número entero, intente nuevamente.";
                }
            }else{
                error2.innerHTML = "";
                error1.innerHTML = "ERROR: El primer valor no es número entero, intente nuevamente.";
            }
        }else{
            error1.innerHTML = "";
            error2.innerHTML= "ERROR: El segundo valor no es un número, intente nuevamente.";
        }
    }else{
        error2.innerHTML = "";
        error1.innerHTML = "ERROR: El primer valor no es un número, intente nuevamente.";
    }
}

//funcion para multiplicar
function multiplicar(n1,n2){
    if(isNumber(n1)){
        if(isNumber(n2)){
            if(esEntero(n1)){
                if(esEntero(n2)){
                    error1.innerHTML = "";
                    error2.innerHTML = "";
                    return parseInt(n1)*parseInt(n2);
                }else{
                    error1.innerHTML = "";
                    error2.innerHTML= "ERROR: El segundo valor no número entero, intente nuevamente.";
                }
            }else{
                error2.innerHTML = "";
                error1.innerHTML = "ERROR: El primer valor no es número entero, intente nuevamente.";
            }
        }else{
            error1.innerHTML = "";
            error2.innerHTML= "ERROR: El segundo valor no es un número, intente nuevamente.";
        }
    }else{
        error2.innerHTML = "";
        error1.innerHTML = "ERROR: El primer valor no es un número, intente nuevamente.";
    }
}


// funcion para verificar si es un numero 
function isNumber(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

// funcion para verificar si es un numero entero
function esEntero(numero){
    if (numero % 1 == 0) {
        return true;
    } else {
        return false;
    }
}

function minmax(min, max){
    if(parseInt(min)>parseInt(max)){
        alert("Rango incorrecto, intente nuevamente");
        desde.innerHTML = "";
        hasta.innerHTML = "";
    }else{
        if(isNumber(min)){
            if(isNumber(max)){
                var random = parseInt(Math.floor(Math.random()*(max-min)))+parseInt(min);
                return random;
            }else{
                alert("El segundo valor no es un numero, intente nuevamente.")
            }
        }else{
            alert("El primer valor no es un numero, intente nuevamente.");
        }
    }
}