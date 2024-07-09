let btnLongitud = document.getElementById('btnLongitud');
btnLongitud.addEventListener('click', () =>{
    let texto1 = document.getElementById('texto1').value;
    let longitud = texto1.length;
    document.getElementById('longitud').value = longitud;

});

let btnMayus = document.getElementById('btnMayus');
btnMayus.addEventListener('click', () =>{
    let texto2 = document.getElementById('texto2').value;
    let mayus = texto2.toUpperCase();
    document.getElementById('resultado').value = mayus;
})

let btnMinus = document.getElementById('btnMinus');
btnMinus.addEventListener('click', () =>{
    let texto2 = document.getElementById('texto2').value;
    let minus = texto2.toLowerCase();
    document.getElementById('resultado').value = minus; 
})


let btnPosicion = document.getElementById('btnPosicion');
btnPosicion.addEventListener('click', () =>{
    let texto3 = document.getElementById('texto3').value;
    let posicion = document.getElementById('posicion').value;
    let caracter = texto3.charAt(posicion);
    document.getElementById('caracter').value = caracter;
})


let btnRealizar = document.getElementById('btnRealizar');
btnRealizar.addEventListener('click', () =>{
    let texto4 = document.getElementById('texto4').value;
    let remplazo = document.getElementById('remplazo').value;
    let nuevo = document.getElementById('nuevo').value;
    let nCadena = texto4.replace(remplazo, nuevo);
    document.getElementById('nCadena').value = nCadena;
})


let btnSeparar = document.getElementById('btnSeparar');
btnSeparar.addEventListener('click', () =>{
    let texto5 = document.getElementById('texto5').value;
    let delimitador = document.getElementById('delimitador').value;
    let nTexto = texto5.split(delimitador);
    document.getElementById('nTexto').value = nTexto;
})

let btnObtener = document.getElementById('btnObtener');
btnObtener.addEventListener('click', () =>{
    let texto6 = document.getElementById('texto6').value;
    let indexInicio = document.getElementById('indexInicio').value;
    let indexFinal = document.getElementById('indexFinal').value;
    let parteTexto = texto6.slice(indexInicio, indexFinal);
    document.getElementById('parteTexto').value = parteTexto;
})

let btnConvertidor = document.getElementById('btnConvertidor');
btnConvertidor.addEventListener('click', () =>{
    let caracter1 = document.getElementById('caracter1').value;
    let ascii = caracter1.charCodeAt(caracter1);
    document.getElementById('ascii').value = ascii;
})