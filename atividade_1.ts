const nome: string = "Maria"
const idade: number = 30;
const altura: number = 1.75;
const estudante: boolean = true;

export {nome, idade, altura, estudante};

export function verificaParImpar(num: number): string {
    return num % 2 === 0 ? "par" : "ímpar";
}

export function somatorio(n: number): number {
    let soma = 0;
    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    return soma;
}

export function fibonacci(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}


export class Retangulo {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    area(): number {
        return this.base * this.altura;
    }

    perimetro(): number {
        return 2 * (this.base + this.altura);
    }
}
