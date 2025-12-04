//Esto crea una función llamada cal, una función es un "Código" que se puede "Invocar" osea llamar/usar en otra parte
function cal() { 
  var total = 0; //Crea la variable total
  var rp = document.querySelectorAll("input[type=radio]:checked"); //Chequea si seleccionaste algo en los "Radio"
  var cantidadp = document.querySelectorAll('input[type="radio"]').length; //Cuenta cuantas preguntas (Radio) hay usando "length"

  rp.forEach((r) => {
    //Repite lo de abajo por cada respuesta seleccionada y crea una variable r que representa cada respuesta seleccionada
    total = total + parseInt(r.value); //Convierte los valores en número y después los va sumando dentro de/en la variable total
  });

  /*
  Lo de acá abajo lo que hace es seleccionar el id de la alerta, guardarla en una variable,
  después le quita la clase "d-none" para que aparezca en pantalla la alerta
  y por último le agrega el resultado (Es una simple suma) al innerHTML que es donde va el texto/contenido de la alerta
  */
  var resultado = document.getElementById("resultado"); //Selecciona el id
  resultado.classList.remove("d-none"); //Elimina la clase "d-none"
  //Esto de abajo convierte el resultado de la operación en una variable "String" osea texto
  var cps = (cantidadp/3/*Cantidad de preguntas entre cantidad de opciones*/).toString();
  var ts = total.toString(); //Lo mismo que el de arriba porque por algún motivo no me andaba sin esto
  resultado.innerHTML = "Aciertos: " + ts + " de " + cps; //Coloca el resultado dentro de la alerta

  //Esto de abajo lo que hace es agregarle una clase de bootstrap que da colores a la alerta dependiendo del resultado del quiz
  if (total == (cantidadp/3)) {
    resultado.classList.add("alert-success");//Verde
    }
    else if(total < (cantidadp/3) && total > 0){
        resultado.classList.add("alert-warning");//Amarillo
    }
    else if(total == 0){
        resultado.classList.add("alert-danger");//Rojo
    }

    localStorage.setItem("total", total) //Guarda el total en el almacenamiento local del navegador
}
