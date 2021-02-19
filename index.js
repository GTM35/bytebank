import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import {ContaSalario} from "./ContaSalario.js";
import {Conta} from "./Conta.js";


const cliente1 = new Cliente("Ricardo", 11122233309);
const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
const Poupanca = new ContaPoupanca(50, cliente1, 1001);
const Salario = new ContaSalario(cliente1);

Salario.depositar(5000);
Salario.sacar(4000);

console.log(Salario);