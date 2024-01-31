import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { DioAccount } from './class/DioAccount'


const contaPessoaFisica: PeopleAccount = new PeopleAccount(42369750, 'Tiago Felipe dos Santos', 2345678)

const contaPessoaJuridica: CompanyAccount = new CompanyAccount(2436598200124, 'Bravo CompanyAccount', 98745)

const contaEspecial: DioAccount = new DioAccount('Tiago Especial', 42369750)
contaEspecial.deposit(100)
contaEspecial.deposit(300)

// contaPessoaFisica.deposit(500)
// contaPessoaFisica.withdraw(100)

// contaPessoaJuridica.deposit(150)
// contaPessoaJuridica.getLoan(1000)
// contaPessoaFisica.printBalance(contaPessoaFisica.getAccountNumber(), contaPessoaFisica.getName(), contaPessoaFisica.getBalance())

contaEspecial.printBalance(contaEspecial.getAccountNumber(), contaEspecial.getName(), contaEspecial.getBalance())

//console.log(contaPessoaFisica)