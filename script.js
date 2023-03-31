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
var arrayChech = [];

const i18 = document.getElementById("i18");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
  getCheckValues();
  console.log(arrayChech);
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

  if (arrayChech.length == 0) {
    setCheckErrorFor(document.getElementsByClassName("form-check"));
    console.log("erro");
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

function setCheckSuccessFor(input) {
  const checkControl = input;

  checkControl.className = "form-check success";
}

function setCheckErrorFor(input) {
  const checkControl = input;

  checkControl.className = "form-check error";
}

function getCheckValues() {
  if (i18.checked) {
    console.log("18 checado");
  }

  if (d11.checked) {
    console.log("11 checado");
    arrayChech.push("11");
  }
  if (d12.checked) {
    console.log("12 checado");
    arrayChech.push("12");
  }
  if (d13.checked) {
    console.log("13 checado");
    arrayChech.push("13");
  }
  if (d14.checked) {
    console.log("14 checado");
    arrayChech.push("14");
  }
  if (d15.checked) {
    console.log("15 checado");
    arrayChech.push("15");
  }
  if (d16.checked) {
    console.log("16 checado");
    arrayChech.push("16");
  }
  if (d17.checked) {
    console.log("17 checado");
    arrayChech.push("17");
  }
  if (d21.checked) {
    console.log("21 checado");
    arrayChech.push("21");
  }
  if (d22.checked) {
    console.log("22 checado");
    arrayChech.push("22");
  }
  if (d23.checked) {
    console.log("23 checado");
    arrayChech.push("23");
  }
  if (d24.checked) {
    console.log("24 checado");
    arrayChech.push("24");
  }
  if (d25.checked) {
    console.log("25 checado");
    arrayChech.push("25");
  }
  if (d26.checked) {
    console.log("26 checado");
    arrayChech.push("26");
  }
  if (d27.checked) {
    console.log("27 checado");
    arrayChech.push("27");
  }
  if (d31.checked) {
    console.log("31 checado");
    arrayChech.push("31");
  }
  if (d32.checked) {
    console.log("32 checado");
    arrayChech.push("32");
  }
  if (d33.checked) {
    console.log("33 checado");
    arrayChech.push("33");
  }
  if (d34.checked) {
    console.log("34 checado");
    arrayChech.push("34");
  }
  if (d35.checked) {
    console.log("35 checado");
    arrayChech.push("35");
  }
  if (d36.checked) {
    console.log("36 checado");
    arrayChech.push("36");
  }
  if (d37.checked) {
    console.log("37 checado");
    arrayChech.push("37");
  }
  if (d41.checked) {
    console.log("41 checado");
    arrayChech.push("41");
  }
  if (d42.checked) {
    console.log("42 checado");
    arrayChech.push("42");
  }
  if (d43.checked) {
    console.log("43 checado");
    arrayChech.push("43");
  }
  if (d44.checked) {
    console.log("44 checado");
    arrayChech.push("44");
  }
  if (d45.checked) {
    console.log("45 checado");
    arrayChech.push("45");
  }
  if (d46.checked) {
    console.log("46 checado");
    arrayChech.push("46");
  }
  if (d47.checked) {
    console.log("47 checado");
    arrayChech.push("47");
  }
}
