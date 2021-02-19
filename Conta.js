export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if (this.constructor == Conta) {
            throw new Error("Error Classe Abstrata - Instância");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

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


    sacar(valor) {

        throw Error("Método Abstrato")
    }
    _sacar(valor, taxa) {
        const valorsacado = taxa * valor;
        if (this._saldo >= valorsacado) {
            this._saldo -= valorsacado;
            return valorsacado;
        }

        return 0;
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