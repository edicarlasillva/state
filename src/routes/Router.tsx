import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Counter } from '../pages/Counter'
import { MyInput } from '../pages/MyInput'
import { MyCheckbox } from '../pages/MyCheckbox'
import { Form } from '../pages/Form'
import { CardContainer } from '../pages/CardContainer'
import { Modal } from '../pages/Modal'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/input" element={<MyInput />} />
        <Route path="/checkbox" element={<MyCheckbox />} />
        <Route path="/form" element={<Form />} />
        <Route path="/card" element={<CardContainer />} />
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </BrowserRouter>
  )
}
