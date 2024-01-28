// Usando 'var' (evite usar 'var' se estiver usando TypeScript, devido ao seu escopo global)
var minhaVariavelVar: number = 10;

// Usando 'let'
let minhaVariavelLet: string = "Olá, TypeScript!";

// Declarando variáveis com const. Const é uma abreviação para constante e seu valor é imutável
const PI: number = 3.14;

// Tipos primitivos number, string e boolean
let numero: number = 8
let texto: string = 'Meu texto'
let booleano: boolean = true

const tipos = (numero: number, texto: string, booleano: boolean) => {
    console.log(numero + " " +  typeof(numero))
    console.log(texto + " " + typeof(texto))
    console.log(booleano + " " + typeof(booleano))
}

tipos(numero, texto, booleano)

