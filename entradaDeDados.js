import Funcionario from './dadosFuncionario.js'
import * as rl from 'readline-sync'
import Desconto from './calculoSalario.js'

const descontos = new Desconto(rl.question("Nome do Funcionario: "), rl.question("Idade: "), 
rl.question("Salario: "), rl.question("Cargo: "), rl.question("Possui quantas faltas no mes? "))

console.log(descontos.exibirInfos())
console.log(`Salário do funcionário: ${descontos.exibirSalario()}`)
console.log(`Total de descontos: ${descontos.exibirDescontos()}`)
console.log(descontos.descontoFalta())