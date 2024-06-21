document.addEventListener('DOMContentLoaded', () => {
    // Soma
    document.getElementById('btn-1').addEventListener('click', () => {
        const num1 = parseFloat(document.getElementById('num-Soma1').value);
        const num2 = parseFloat(document.getElementById('num-Soma2').value);
        const result = num1 + num2;
        document.getElementById('result-Soma').value = result;
    });

    // Subtração
    document.getElementById('btn-2').addEventListener('click', () => {
        const num1 = parseFloat(document.getElementById('num-Sub1').value);
        const num2 = parseFloat(document.getElementById('num-Sub2').value);
        const result = num1 - num2;
        document.getElementById('result-Sub').value = result;
    });

    // Multiplicação
    document.getElementById('btn-3').addEventListener('click', () => {
        const num1 = parseFloat(document.getElementById('num-Mul1').value);
        const num2 = parseFloat(document.getElementById('num-Mul2').value);
        const result = num1 * num2;
        document.getElementById('result-Mul').value = result;
    });

    // Divisão
    document.getElementById('btn-4').addEventListener('click', () => {
        const num1 = parseFloat(document.getElementById('num-Div1').value);
        const num2 = parseFloat(document.getElementById('num-Div2').value);
        if (num2 === 0) {
            alert("Divisão por zero não é permitida");
            document.getElementById('result-Div').value = "Erro";
        } else {
            const result = num1 / num2;
            document.getElementById('result-Div').value = result;
        }
    });

    // Fatorial
    document.getElementById('btn-5').addEventListener('click', () => {
        const num = parseInt(document.getElementById('num-Fat').value);
        let result = 1;
        for (let i = num; i > 1; i--) {
            result *= i;
        }
        document.getElementById('result-Fat').value = result;
    });

    // IMC
    document.getElementById('btn-6').addEventListener('click', () => {
        const peso = parseFloat(document.getElementById('num-IMC1').value);
        const altura = parseFloat(document.getElementById('num-IMC2').value);
        const result = peso / (altura * altura);
        document.getElementById('result-IMC').value = result.toFixed(2);
    });

    // Nome-Sobrenome
    document.getElementById('btn-7').addEventListener('click', () => {
        const nome = document.getElementById('Nome').value;
        const sobrenome = document.getElementById('Sobrenome').value;
        document.getElementById('result-NomeSobrenome').value = nome + " " + sobrenome;
    });

    // Login
    document.getElementById('btn-8').addEventListener('click', () => {
        const email = document.getElementById('login').value;
        const password = document.getElementById('password').value;
        alert(`Login realizado com Email: ${email} e Senha: ${password}`);
    });

    // Mostrar imagem
    document.getElementById("btn-9").addEventListener('click', MudaImg);
    function MudaImg(){
        let ExibeImg = document.getElementById('respostas9');
        console.log("oaa");

        if(ExibeImg.style.display == "block"){
            ExibeImg.style.display = "none";
        } else{
            ExibeImg.style.display = "block";
        };

    };
})
