// Arrays

// Array de numeros declarando o tipo com o operador diamante
const arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5]

// Array de string com uma outra forma de declarar o tipo
const arrayDeString: string[] = ['Tiago', 'Viviane', 'Miguel', 'Giovana']
   
// Localizando elementos com find
const buscaNum = arrayDeNumeros.find(num => num === 3)
console.log(buscaNum)

// Utilizando o forEach para iteração do array
//console.log('Iterando array com o forEach')
//arrayDeNumeros.forEach(num => console.log(num))

arrayDeNumeros.forEach(num => {
    if(num > 2 && num % 2 === 0){
        console.log(num * 2)
    }
})

// Utilizando a função map
arrayDeNumeros.map(num => console.log(num))