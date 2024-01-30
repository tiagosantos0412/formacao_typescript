import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'


const contaPessoaFisica: PeopleAccount = new PeopleAccount(36568593885, 'Tiago Felipe', 2345678)
const contaPessoaJuridica: CompanyAccount = new CompanyAccount(24658412000126, 'Bravo Empreendimentos', 74123)
console.log('Conta pessoa Física:')
console.log(contaPessoaFisica)
console.log('Conta Pessoa Jurídica:')
console.log(contaPessoaJuridica)

console.log(contaPessoaJuridica.deposit())
