import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;

    static qtd = 0; //Trabalhando com atributo estático

    _cliente;
    _saldo = 0;

    set cliente(novovalor) {
        if (novovalor instanceof Cliente) {
            this._cliente = novovalor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor (cliente, agencia){
        
        this.cliente = cliente;
        this.agencia = agencia;
        ContaCorrente.qtd+=1;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorsacado = this.sacar(valor);
        conta.depositar(valorsacado);
    }
}