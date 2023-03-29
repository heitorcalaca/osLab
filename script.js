const form = document.getElementById("form");
const dentName = document.getElementById("dent-name");
const pacName = document.getElementById("pac-name");
const d11 = document.getElementById("11");
const d12 = document.getElementById("12");
const d13 = document.getElementById("13");
const d14 = document.getElementById("14");
const d15 = document.getElementById("15");
const d16 = document.getElementById("16");
const d17 = document.getElementById("17");
const d21 = document.getElementById("21");
const d22 = document.getElementById("22");
const d23 = document.getElementById("23");
const d24 = document.getElementById("24");
const d25 = document.getElementById("25");
const d26 = document.getElementById("26");
const d27 = document.getElementById("27");
const d31 = document.getElementById("31");
const d32 = document.getElementById("32");
const d33 = document.getElementById("33");
const d34 = document.getElementById("34");
const d35 = document.getElementById("35");
const d36 = document.getElementById("36");
const d37 = document.getElementById("37");
const d41 = document.getElementById("41");
const d42 = document.getElementById("42");
const d43 = document.getElementById("43");
const d44 = document.getElementById("44");
const d45 = document.getElementById("45");
const d46 = document.getElementById("46");
const d47 = document.getElementById("47");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
  getCheckValues();
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

function getCheckValues() {
  if (d11.checked) {
    console.log("11 checado");
  }
  if (d12.checked) {
    console.log("12 checado");
  }
  if (d13.checked) {
    console.log("13 checado");
  }
  if (d14.checked) {
    console.log("14 checado");
  }
  if (d15.checked) {
    console.log("15 checado");
  }
  if (d16.checked) {
    console.log("16 checado");
  }
  if (d17.checked) {
    console.log("17 checado");
  }
  if (d21.checked) {
    console.log("21 checado");
  }
  if (d22.checked) {
    console.log("22 checado");
  }
  if (d23.checked) {
    console.log("23 checado");
  }
  if (d24.checked) {
    console.log("24 checado");
  }
  if (d25.checked) {
    console.log("25 checado");
  }
  if (d26.checked) {
    console.log("26 checado");
  }
  if (d27.checked) {
    console.log("27 checado");
  }
  if (d31.checked) {
    console.log("31 checado");
  }
  if (d32.checked) {
    console.log("32 checado");
  }
  if (d33.checked) {
    console.log("33 checado");
  }
  if (d34.checked) {
    console.log("34 checado");
  }
  if (d35.checked) {
    console.log("35 checado");
  }
  if (d36.checked) {
    console.log("36 checado");
  }
  if (d37.checked) {
    console.log("37 checado");
  }
  if (d41.checked) {
    console.log("41 checado");
  }
  if (d42.checked) {
    console.log("42 checado");
  }
  if (d43.checked) {
    console.log("43 checado");
  }
  if (d44.checked) {
    console.log("44 checado");
  }
  if (d45.checked) {
    console.log("45 checado");
  }
  if (d46.checked) {
    console.log("46 checado");
  }
  if (d47.checked) {
    console.log("47 checado");
  }
}
