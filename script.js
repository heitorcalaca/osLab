const form = document.getElementById("form");
const dentName = document.getElementById("dent-name");
const pacName = document.getElementById("pac-name");
const d11 = document.getElementById("11");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();

  console.log(checkedValue);
});

function checkInputs() {
  const dentNameValue = dentName.value;
  const pacNameValue = pacName.value;

  if (dentNameValue == "") {
    setErrorFor(dentName, "O nome do dentista é obrigatório.");
  } else {
    setSuccessFor(dentName);
  }

  if (pacNameValue == "") {
    setErrorFor(pacName, "O nome do paciente é obrogatório");
  } else {
    setSuccessFor(pacName);
  }
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a Mensagem de Erro
  small.innerText = message;

  // Adicionar a classe de Erro
  formControl.className = "form-control error";
}
