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