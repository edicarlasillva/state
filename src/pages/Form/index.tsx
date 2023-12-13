import { useState } from 'react'

export function Form() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(35)

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <p>
        Olá, {name}. Você tem {age} anos.
      </p>

      <button onClick={() => setAge(age + 1)}>Aumentar idade</button>
    </>
  )
}
