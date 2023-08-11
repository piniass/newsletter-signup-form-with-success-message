formulario.addEventListener("submit", function(event) {
    event.preventDefault();
    resultadoForm();
  });
  

  function resultadoForm() {
    let input = document.getElementById("email");
    let str = input.value;
    let valido = false;
    let textos = document.getElementsByClassName("texto-container");
    const contenedor = document.getElementById("contenedor");
    const confirmacion = document.getElementById("confirmacion");
    const btn = document.getElementById("btn");
    const correo = document.getElementById("correo");
    const error = document.getElementById("error");

    if (str) {
      for (let i = 0; i < str.length; i++) {
        if (str[i] == "@") {
          valido = true;
          break;
        }
      }
    }
  
    if (valido) {
      console.log("Válido");
      contenedor.style.display = "none";
      confirmacion.style.display = "block";
      error.style.display = "none";

      correo.innerHTML = input.value;
      btn.addEventListener("click", function() {
        contenedor.style.display = "flex";
        confirmacion.style.display = "none";
      });
      
    } else {
      error.style.display = "block";
      // alert("No válido");
    }
  }
  

