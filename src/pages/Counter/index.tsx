import { useState } from 'react'

export function Counter() {
  // Estado do componente
  const [count, setCount] = useState(0)

  // let posicao1 = counter[0]
  // let posicao2 = counter[1]

  // function handleIncrementCount() {
  //   setCount(count + 1)
  // }

  return (
    <>
      <h1>Você pressionou {count} vezes o botão</h1>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </>
  )
}
