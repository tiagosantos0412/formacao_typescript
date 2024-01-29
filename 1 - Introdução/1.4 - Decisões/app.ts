// Estruturas de decisão if/else - se/senao

const numero: number = 1

if(numero > 10) {
    console.log(`O numero ${numero} é maior que 10`)
} else if(numero === 10) {
    console.log(`O numero ${numero} é igual que 10`)
} else {
    console.log(`O numero ${numero} é menor que 10`)
}

// Utilizando um objeto literal como estrura de decisão.

const typeUser = {
    admin: 'Permissão de administrador',
    student: 'Permissão de estudante',
    viewer: 'Permissão de visualização apenas'
}

function validaUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'admin'

validaUser(usuario)

/**
 * const typeUser = { ... }: Cria um objeto literal chamado typeUser que mapeia diferentes 
 * tipos de usuários para suas respectivas permissões.

function validaUser(user: string) { ... }: Define uma função chamada validaUser que recebe 
um parâmetro user do tipo string. A função imprime a permissão associada ao tipo de usuário 
fornecido usando a notação de índice (typeUser[user as keyof typeof typeUser]). 
A expressão user as keyof typeof typeUser é usada para garantir que user seja uma chave válida 
do objeto typeUser.

const usuario = 'admin': Declara uma constante chamada usuario e a inicializa com o valor 'admin'.

validaUser(usuario): Chama a função validaUser passando a constante usuario como argumento. 
Isso imprimirá no console a permissão associada ao tipo de usuário 'admin' de acordo com o 
objeto typeUser.
 */