import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
const gerente = new Gerente("Ricardo", 5000, 12345677827);
const cliente = new Cliente("Cleiton", 12398745690, "3505")

diretor.cadastrarSenha(353535);
gerente.cadastrarSenha("ggg35");

const statusLogin = SistemaAutenticacao.login(diretor, 353535);
const gerente_StatusLogin = SistemaAutenticacao.login(gerente, "ggg35");
const cliente_StatusLogin = SistemaAutenticacao.login(cliente, "3505");

console.log(statusLogin);
console.log(gerente_StatusLogin);
console.log(cliente_StatusLogin);