import Funcionario from './dadosFuncionario.js'
import * as rl from 'readline-sync'

export default class Desconto extends Funcionario{
    constructor(nome, idade, salario, cargo, falta){
        super(nome, idade, salario, cargo, falta)
        this.inss = salario * 8 / 100
        this.valeTransporte = salario * 4 / 100
        this.impostodeRenda = salario * 11 / 100
        if (falta < 2) {
        this.falta = salario / 30 * falta
         }
        else{ 
           const qntSemanas = rl.question("As faltas ocorreram na mesma semana? ")
            if(qntSemanas === "sim" | qntSemanas === "Sim"){
                this.falta = salario / 30 * falta}
                    else{
                const qntSemanas = rl.question("Quantas semanas diferentes? ")
                this.falta = salario / 30 * falta * qntSemanas
            }
         } 
         this.salarioLiquido = (salario - this.inss - this.valeTransporte - this.impostodeRenda - this.falta)
        this.totalDescontos = (this.inss + this.valeTransporte + this.impostodeRenda + this.falta)
        }
        

    descontoFalta(){
        if(this.falta < 1){
           return `Sem falta injustificada.`
        }else{
        return `Foi descontado ${this.falta} referente a faltas não justificadas`
    } }
    
    exibirSalario(){
        return `${this.salarioLiquido}`
    }
    exibirDescontos(){
        return `${this.totalDescontos}`
    }
}

