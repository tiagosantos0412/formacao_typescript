import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'


const contaPessoaFisica: PeopleAccount = new PeopleAccount(36568593885, 'Tiago Felipe', 2345678)
const contaPessoaJuridica: CompanyAccount = new CompanyAccount(24658412000126, 'Bravo Empreendimentos', 74123)

console.log(contaPessoaFisica)
contaPessoaFisica.deposit()
