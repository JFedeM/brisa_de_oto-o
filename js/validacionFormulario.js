//VALIDACIÓN  FORMULARIO
const formularioNombre = document.getElementById("formulario-nombre");
const formularioPhone = document.getElementById("formulario-phone");
const formularioEmail = document.getElementById("formulario-mail");
const formularioComentarios = document.getElementById("formulario-comentarios");
const formulario = document.getElementById("formulario");
const formularioContactoError = document.getElementById("contacto-error");

formulario.addEventListener("submit", e=>{
  // e.preventDefault();
  let mensajeError = "";
  let mensajeAlertaContacto = false;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if(formularioNombre.value.length < 0){
        mensajeError += "Se Requieren Nombre<br><br>";
    mensajeAlertaContacto = true;
    }
    
  if(!regexEmail.test(formularioEmail.value)){
    mensajeError += "No es una dirección de correo válida <br><br>";
    mensajeAlertaContacto = true;
    }
  
  if(formularioComentarios.value.length < 6){
    mensajeError += "Se Requieren Comentario o el comentario es muy corto";
    mensajeAlertaContacto = true;
    }
    
  if(mensajeAlertaContacto){
    e.preventDefault();
    formularioContactoError.innerHTML = mensajeError;
    
    }
})


