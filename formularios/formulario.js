

function enviarForm() {
  const formulario = document.querySelector('form');

  const usuario = formulario.usuario.value;
  const password = formulario.password.value;
  console.log("usuario", usuario);
  console.log("password", password);
  console.log('datos', formulario.password.value);


}