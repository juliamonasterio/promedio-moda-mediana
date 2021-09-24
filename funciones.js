const listNumeros=[40,10,30,40];

const media=0;
let mediana=0;

// Calculo de media Aritmetica
function calcularMediaAritmetica(lista){

    let promedio=0,  suma=0, contador=0;
    //Con reduce recorre el array y hace lo que la funcion indique
    suma= lista.reduce(
        function (valorAcumulado=0, elementoActual){

            return valorAcumulado+elementoActual; })

            return (suma/lista.length);
}


//Calculo de mediana



function esPar(numero){
    if(numero%2===0){
        return true;
    }else{
        return false;
    }
}


function esMediana(lista){

    lista.sort();
    const mitadLista= parseInt(listNumeros.length/2);
    if(esPar(lista.length)){

        let elemento1=listNumeros[mitadLista-1];
        let elemento2 = listNumeros[mitadLista];
        let promedioElementos=[elemento1,elemento2];
    
        mediana= calcularMediaAritmetica(promedioElementos);
        return mediana;
    }
    else{
            mediana = lista[mitadLista];
            return mediana;
}}
