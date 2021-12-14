import { useState } from 'react'
import axios from 'axios'
import { FaSearchLocation } from 'react-icons/fa'
import Label from './components/Label'
import Input from './components/Input'
import Button from './components/Button'
import Resultado from './components/Resultado'

import './styles/main.scss'

export default function App() {
  const [showResult, setShowResult] = useState(false)

  return (
    <main className="container">
      <form className="search">
        <Label id="cep">CEP</Label>
        <div className="search__item">
          <Input
            type="search"
            name="cep"
            id="cep"
            placeholder="Digite aqui o CEP desejado"
          />
          <Button type="submit">
            <FaSearchLocation />
          </Button>
        </div>
      </form>

      {showResult ? <Resultado /> : null}
    </main>
  )
}
