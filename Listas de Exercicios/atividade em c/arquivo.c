#include <stdio.h>


double raizQuadrada(double numero) {
    if (numero < 0) {
        printf("Número negativo. Não é possível calcular a raiz quadrada de um número negativo.\n");
        return -1; // Valor especial para indicar erro
    }


    if (numero == 0) {
        return 0;
    }

    double epsilon = 0.000001;
    double estimativa = numero;


    while ((estimativa * estimativa - numero) > epsilon || (numero - estimativa * estimativa) > epsilon) {
        estimativa = (estimativa + (numero / estimativa)) / 2;
    }

    return estimativa;
}

double potencia(double base, int expoente) {
    int resultado = 1;

    if (expoente < 0) {
        base = 1 / base;
        expoente = -expoente;
    }

    for (int i = 0; i < expoente; i++) {
        resultado *= base;
    }

    return resultado;
}

double soma(double a, double b) {
    return a + b;
}


double subtracao(double a, double b) {
    return a - b;
}

int main() {
    int escolha;
    double num1, num2;

    do {
        printf("\nMenu:\n");
        printf("1. Calcular a raiz quadrada\n");
        printf("2. Calcular a potência\n");
        printf("3. Calcular a soma\n");
        printf("4. Calcular a subtração\n");
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
                printf("%lf ^ %lf = %.5lf\n", num1, num2, potencia(num1, (int)num2));
                break;

            case 3:
                printf("Digite o primeiro número: ");
                scanf("%lf", &num1);
                printf("Digite o segundo número: ");
                scanf("%lf", &num2);
                printf("A soma de %lf e %lf é %.5lf\n", num1, num2, soma(num1, num2));
                break;

            case 4:
                printf("Digite o minuendo: ");
                scanf("%lf", &num1);
                printf("Digite o subtraendo: ");
                scanf("%lf", &num2);
                printf("A subtração de %lf e %lf é %.5lf\n", num1, num2, subtracao(num1, num2));
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
