interface ICard {
    id: number,
    paragraph: string,
    details: string
}

export const Card = ({ id, paragraph, details }: ICard) =>{
    console.log(id)
    return (
        <section>
            <h2>Card {id}</h2>
            <p>{paragraph}</p>
            <p>{details}</p>
        </section>
    )
}