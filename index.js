import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1  = new Cliente("Ricardo", "11133344455");
const cliente2 = new Cliente("Alice", "11133344400");


const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

contaCorrenteRicardo.transferir(200, conta2);

console.log(ContaCorrente.numeroDeContas);




