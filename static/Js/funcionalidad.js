
//?#1
function Impar(rangA , rangB) 
{
    for (let i = rangA; i < rangB; i++)
    {
        if(i % 2 !=0)
        {
            console.log("El numero " + i + " Es impar");
        }
        
    }
}

//Impar(1,50)

//?#2
function reverseString(str) {
    prompt('Ingrese una palabra').split('').reverse().join('');
}

//console.log(reverseString("hola"));

//?#3
function Fibonacci()
{
    var x = 0;
    var y = 1;
    var z;
    //!Important : Con comilas simples
    console.log(`[ ${y}]`);
    for (let i = 0; i < 15; i++) {
        z = x + y
        console.log(`[ ${z} ]`);
        y = x;
        x = z;

    }
}
Fibonacci()

//? #4
function Palindromo(str)
{   
    //! '\' <- inicio de expresion  '\s' <- espacio en blanco  '/' <- final de expresion  g <- global, buscara las similitudes
    let xd = str.replace(/\s/g, '').toLowerCase();
    const reverse = xd.split('').reverse().join('');
    console.log(reverse)
    if(xd == reverse)
    {
        console.log(`La palabra ${str} es palidroma`)
    }
    else
    {
        console.log(`La palabra ${str} no es palidroma`)
    }
}

//Palindromo("Anita lava latina")

function Knowndate(date) {
    var d = new Date(date);
    var aux =  d;
    d.setDate(aux.getDate() - (aux.getDate() - 1));
    document.write(d+"<br></br>");
    for (let i = 31; i < 27; i++) 
    {   
        if(d.getMonth()>aux.getMonth())
        {
            d = new Date(date);     
        }
        else
        {
            document.write(d+"<br></br>");
            break;
        }
    }
}
//! important funcion prompt <- es como un input en ventana emergente
var date = prompt("Ingrese una fecha mes/dia/año: ");
//Knowndate(date);

var types  = ["electricidad", "agua","hierba","fuego"]
function CalculadoraDeDañoPokemon(tipo1, tipo2, ataque,defensa) {
    var eficacia = 0.5;
    if (tipo1 != tipo2)
    {
        if(tipo1 == "fuego" && tipo2 == "hierba") eficacia = 2;
        if (tipo1 == "agua" && tipo2 == "fuego") eficacia = 2;
        if (tipo1 == "electricidad" && tipo2 == "agua") eficacia = 2;
        if ((tipo1 == "fuego" && tipo2 == "electrico") || (tipo2 == "fuego" && tipo1 == "electrico")) eficacia = 1;
        if ((tipo1 == "fuego" && tipo2 == "hierba") || (tipo2 == "fuego" && tipo1 == "hierba")) eficacia = 1;
        return Math.ceil(50*(ataque/defensa)*eficacia);

    }
}

function MoverCoche() {
    window.onload = function(){
        fondo1 = document.getElementById("fondouno");
        fondo2 = document.getElementById("fondodos");
        paramover = setInterval(mover,50);
        setInterval(repetir,2250);
    }
    desplazar = 0;
    function mover()
    {
        desplazar -= 10;
        desplazar2 = desplazar + 450;
        position1 = desplazar + "px";
        position2 = desplazar2 + "px";
        fondo1.style.left= position1;
        fondo2.style.left= position2;
    }
    function repetir() {
        fondo1.style.left = "0px";
        fondo2.style.left = "450px";
        desplazar = 0;
    }
}