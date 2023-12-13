import { useState } from 'react'

export function MyInput() {
  const [text, setText] = useState('Jean')

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Você digitou: {text}</p>

      <button onClick={() => setText('')}>Reiniciar</button>
    </>
  )
}
