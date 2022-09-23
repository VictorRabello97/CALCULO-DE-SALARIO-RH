import * as rl from 'readline-sync'

export default class Funcionario {
    constructor(nome, idade, salario, cargo, falta) {
        this.nome = nome
        this.idade = idade
        this.salario = salario
        this.cargo = cargo
        this.falta = falta
        
    }
    exibirInfos(){
        return  `Funcionario: ${this.nome}, Idade: ${this.idade}, Salario: ${this.salario}, Cargo: ${this.cargo}`
    }
}

