import { soma, multiplicar, multi2 } from "./soma";

describe('soma', () => {
    it('deve somar 1 ao número informado', () => {
        const value = soma(1)
        expect(value).toBe(2)
    })

    it('deve multiplicar o número por dois', () => {
        const value = multiplicar(2, 2)
        expect(value).toBe(4)
    })

    it('deve multiplicar o número por 3', () => {
        const value = multiplicar(2, 3)
        expect(value).toBe(6)
    })

    it('deve informar um ero, com multiplicador diferente de 2 ou 3', () => {
        const value = multi2(2, 4)
        expect(value).toBe('Multiplicador não aceito!')
    } )
    
})

