import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {

    static qtd = 0; //Trabalhando com atributo estático

    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.qtd += 1;
    }

    //Sobrescrevendo o método sacar
    sacar(valor) {
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }

}