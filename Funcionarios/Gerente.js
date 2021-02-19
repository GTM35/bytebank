import { Funcionarios } from "./Funcionario.js";

export class Gerente extends Funcionarios {

    constructor(nome, salario, cpf) {
        super(nome, salario, cpf);
        this.bonificacao = 1.1;
    }
}