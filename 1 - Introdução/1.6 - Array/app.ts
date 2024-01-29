// Arrays

// Array de numeros declarando o tipo com o operador diamante
const arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5]

// Array de string com uma outra forma de declarar o tipo
const arrayDeString: string[] = ['Tiago', 'Viviane', 'Miguel', 'Giovana']

// Função length retorna o tamano do array ou a quantidade de elementos
console.log(arrayDeNumeros.length)

// Adicionar elementos na primeira posição e remover da última posição
console.log('Array original ', arrayDeNumeros)
arrayDeNumeros.push(6)
console.log('Array com novo elemento ', arrayDeNumeros)
arrayDeNumeros.pop()
console.log('Array com novo ultimo elemento removido ', arrayDeNumeros)




for(let i = 0; i < arrayDeString.length; i++){
    console.log(arrayDeString[i])
}