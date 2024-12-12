const form = document.getElementById("agendar-form");

const name = document.getElementById("name");
const telefone = document.getElementById("telefone");
const nomePet = document.getElementById("pet");
const especiePet = document.getElementById("pet-especie");
const data = document.getElementById("data");
const email = document.getElementById("email");
const servico = document.getElementById("servico");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInputs();
});

function checkInputs() {
    const nameValue = name.value.trim();
    const telefoneValue = telefone.value.trim();
    const emailValue = email.value.trim();

    // Validações nome do responsável
    if (nameValue.length == 0) {
        setErrorFor(name, "O campo não pode estar vazio");
    } else if (nameValue.length <= 2) {
        setErrorFor(name, "O nome do responsável precisa ter mais de 2 caracteres");
    } else {
        setSuccessFor(name);
    }

    // Validações telefone
    if (telefoneValue.length == 0) {
        setErrorFor(telefone, "O campo não pode estar vazio");
    } else if (!checkTel(telefoneValue)) {
        setErrorFor(telefone, "Este número de telefone é inválido");
    } else {
        setSuccessFor(telefone);
    }

    // Validações data
    
    const dataAtual = new Date();
    const dataInput = new Date(data.value);

    if (dataInput < dataAtual) {
        setErrorFor(data, "Esta data é inválida");
    } else {
        setSuccessFor(data);
    }

    if (emailValue.length > 0) {
        if (!checkEmail(emailValue)) {
            setErrorFor(email, "Este email é inválido");
        } else {
            setSuccessFor(email);
        }
    }

    agendarConsulta();
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;
    small.style.visibility = "visible";

    formControl.className = "input-label error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.style.visibility = "hidden";
    formControl.className = "input-label success";
}

function checkTel(telefone) {
    const regex = /^\d{9,}$/;
    return regex.test(telefone);
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

function agendarConsulta() {
    setSuccessFor(nomePet), setSuccessFor(especiePet), setSuccessFor(servico);
}

