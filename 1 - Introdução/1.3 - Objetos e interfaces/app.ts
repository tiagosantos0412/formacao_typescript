// Declarando objetos - Interface

interface Pessoa {
    nome: string,
    idade: number,
    //profissao: string | undefined => desta forma a propriedade ainda precisa ser declarada na instancia do objeto
    profissao?: string
}

// Criando o objeto pessoa
const pessoa1: Pessoa = {
    nome: 'Tiago Felipe',
    idade: 37
}

const pessoa2: Pessoa = {
    nome: 'Viviane Assis',
    idade: 26,
    profissao: 'Técnica de Enfermagem'
}

// Criando um array do tipo Pessoa com os objetos pessoa
const arrayPessoa: Pessoa[] = [
    pessoa1,
    pessoa2
]

// ou
const arrayPessoa2: Array<Pessoa> = [
    pessoa1,
    pessoa2
]

console.log(arrayPessoa)