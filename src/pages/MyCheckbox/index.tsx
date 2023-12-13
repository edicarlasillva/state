import { ChangeEvent, useState } from 'react'

export function MyCheckbox() {
  const [liked, setLiked] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setLiked(e.target.checked)
  }

  return (
    <>
      <input type="checkbox" checked={liked} onChange={handleChange} />
      <label>Eu curti isso</label>

      <p>Você {liked ? 'curtiu' : 'não curtiu'} esse conteúdo.</p>
    </>
  )
}

// Criar dois estados: nome(name) e idade(age)
// Input com o estado nome
// Botão para aumentar idade
