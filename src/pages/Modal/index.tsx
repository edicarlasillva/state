import { useState } from 'react'

import {
  Button,
  ButtonModalCancel,
  ModalContainer,
  ModalContent,
  ModalOverlay,
} from './styles'

export function Modal() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  return (
    <ModalContainer>
      <Button onClick={toggleModal}>Abrir Modal</Button>

      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <h2>Confirmar compra</h2>
            <p>Tem certeza que deseja prosseguir com esta compra?</p>
            <p>
              Valor total: <strong>R$ 100,00</strong>
            </p>
            <ButtonModalCancel onClick={toggleModal}>
              Cancelar
            </ButtonModalCancel>
          </ModalContent>
        </ModalOverlay>
      )}
    </ModalContainer>
  )
}
