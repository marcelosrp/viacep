import { FaSearchLocation } from 'react-icons/fa'
import Label from './components/Label'
import Input from './components/Input'
import Button from './components/Button'

import './styles/main.scss'

export default function App() {
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
    </main>
  )
}
