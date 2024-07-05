const form = document.getElementById("form");
const form = document.getElementById("username");
const form = document.getElementById("email");
const form = document.getElementById("password");
const form = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    alert("Cadastrado com sucesso");
})


function checkInputUsername(){
    const usernameValue = username.value;

    console.log(usernameValue)
}
