import { useState } from 'react'

import { Container, Button } from './styles'
import { Card } from '../../components/Card'

interface ICardContainer {
  id: number
  title: string
  description: string
}

export function CardContainer() {
  const [cards, setCards] = useState<ICardContainer[]>([
    {
      id: 1,
      title: 'Card 1',
      description: 'Descrição para o card 1',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Descrição para o card 2',
    },
  ])

  function handleAddNewCard() {
    const newCard: ICardContainer = {
      id: cards.length + 1,
      title: `Card ${cards.length + 1}`,
      description: `Descrição do card ${cards.length + 1}`,
    }

    // cards.push(newCard)
    // console.log(cards)

    setCards((prevState) => [...prevState, newCard])
  }

  return (
    <Container>
      <Button onClick={handleAddNewCard}>Adicionar novo</Button>

      {cards.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </Container>
  )
}
