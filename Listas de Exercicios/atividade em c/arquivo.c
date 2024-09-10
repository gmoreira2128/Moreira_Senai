#include <stdio.h>

// Função para calcular a raiz quadrada usando o método de aproximação
double raizQuadrada(double numero) {
    if (numero < 0) {
        printf("Número negativo. Não é possível calcular a raiz quadrada de um número negativo.\n");
        return -1;
    }

    if (numero == 0) {
        return 0;
    }

    double epsilon = 0.000001;
    double estimativa = numero;

    // Método de Newton-Raphson para calcular a raiz quadrada
    while ((estimativa * estimativa - numero) > epsilon || (numero - estimativa * estimativa) > epsilon) {
        estimativa = (estimativa + (numero / estimativa)) / 2;
    }

    return estimativa;
}

// Função para calcular a potência
double potencia(double base, int expoente) {
    double resultado = 1;

    if (expoente < 0) {
        base = 1 / base;
        expoente = -expoente;
    }

    for (int i = 0; i < expoente; i++) {
        resultado *= base;
    }

    return resultado;
}

// Funções para operações básicas
double soma(double a, double b) {
    return a + b;
}

double subtracao(double a, double b) {
    return a - b;
}

double multiplicacao(double a, double b) {
    return a * b;
}

double divisao(double a, double b)
{
    return a / b;
}

// Função para calcular o MDC
int mdc(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Função para calcular o MMC
int mmc(int a, int b) {
    return (a * b) / mdc(a, b);
}

// Função para resolver a equação de segundo grau
void equacaoSegundoGrau(double a, double b, double c) {
    if (a == 0) {
        printf("O coeficiente 'a' não pode ser zero.\n");
        return;
    }

    double delta = b * b - 4 * a * c;
    double x1, x2;

    if (delta > 0) {
        x1 = (-b + raizQuadrada(delta)) / (2 * a);
        x2 = (-b - raizQuadrada(delta)) / (2 * a);
        printf("As raízes da equação são: x1 = %.5lf e x2 = %.5lf\n", x1, x2);
    } else if (delta == 0) {
        x1 = -b / (2 * a);
        printf("A equação tem uma raiz real: x1 = %.5lf\n", x1);
    } else {
        printf("A equação não tem raízes reais.\n");
    }
}

// Função para calcular o fatorial
int fatorial(int n) {
    if (n < 0) {
        printf("O fatorial não está definido para números negativos.\n");
        return -1;
    }

    int resultadoFatorial = 1;
    for (int i = 1; i <= n; i++) {
        resultadoFatorial *= i;
    }
    
    return resultadoFatorial;
}

int main() {
    int escolha;
    double num1, num2;
    int a, b;

    do {
        printf("\nEscolha uma opção:\n");
        printf("1. Calcular a Raiz Quadrada\n");
        printf("2. Calcular a Potência\n");
        printf("3. Calcular a Soma\n");
        printf("4. Calcular a Subtração\n");
        printf("5. Calcular a Multiplicação\n");
        printf("6. Calcular o MDC\n");
        printf("7. Calcular o MMC\n");
        printf("8. Calcular uma equação de Segundo Grau\n");
        printf("9. Calcular o Fatorial\n");
        printf("10. Calcular a Divisão");
        printf("0. Sair\n");
        printf("Escolha uma opção: ");
        scanf("%d", &escolha);

        switch (escolha) {
            case 1:
                printf("Digite o número para calcular a raiz quadrada: ");
                scanf("%lf", &num1);
                printf("Raiz quadrada de %.5lf é aproximadamente %.5lf\n", num1, raizQuadrada(num1));
                break;

            case 2:
                printf("Digite a base: ");
                scanf("%lf", &num1);
                printf("Digite o expoente (inteiro): ");
                scanf("%lf", &num2);
                printf("%.5lf ^ %d = %.5lf\n", num1, (int)num2, potencia(num1, (int)num2));
                break;

            case 3:
                printf("Digite o primeiro número: ");
                scanf("%lf", &num1);
                printf("Digite o segundo número: ");
                scanf("%lf", &num2);
                printf("A soma de %.5lf e %.5lf é %.5lf\n", num1, num2, soma(num1, num2));
                break;

            case 4:
                printf("Digite o minuendo: ");
                scanf("%lf", &num1);
                printf("Digite o subtraendo: ");
                scanf("%lf", &num2);
                printf("A subtração de %.5lf e %.5lf é %.5lf\n", num1, num2, subtracao(num1, num2));
                break;

            case 5:
                printf("Digite o primeiro número: ");
                scanf("%lf", &num1);
                printf("Digite o segundo número: ");
                scanf("%lf", &num2);
                printf("A multiplicação de %.5lf e %.5lf é %.5lf\n", num1, num2, multiplicacao(num1, num2));
                break;

            case 6:
                printf("Digite dois números inteiros: ");
                scanf("%d %d", &a, &b);
                printf("O MDC de %d e %d é %d\n", a, b, mdc(a, b));
                break;

            case 7:
                printf("Digite dois números inteiros: ");
                scanf("%d %d", &a, &b);
                printf("O MMC de %d e %d é %d\n", a, b, mmc(a, b));
                break;

            case 8:
                printf("Digite o coeficiente a: ");
                scanf("%lf", &num1);
                printf("Digite o coeficiente b: ");
                scanf("%lf", &num2);
                double c;
                printf("Digite o coeficiente c: ");
                scanf("%lf", &c);
                equacaoSegundoGrau(num1, num2, c);
                break;

            case 9:
                printf("Digite o número que deseja calcular o fatorial: ");
                scanf("%d", &a);
                int resultadoFatorial = fatorial(a);
                if (resultadoFatorial != -1) {
                    printf("O fatorial de %d é %d\n", a, resultadoFatorial);
                }
                break;

                case 10: 
                printf("Digite o primeiro número: ");
                scanf("%lf", &num1);
                printf("Digite o segundo número: ");
                scanf("%lf", &num2);
                printf("A divisão de %.5lf e %.5lf é %.5lf\n", num1, num2, fatorial(num1, num2));
                break;

            case 0:
                printf("Saindo do programa.\n");
                break;

            default:
                printf("Opção inválida. Por favor, tente novamente.\n");
                break;
        }

    } while (escolha != 0);

    return 0;
}
