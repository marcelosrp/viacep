import { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { FaSearchLocation } from 'react-icons/fa'
import Label from './components/Label'
import Input from './components/Input'
import Button from './components/Button'
import Resultado from './components/Resultado'
import { maskCep, limpaString } from './helpers/utils'

import 'react-toastify/dist/ReactToastify.css'
import './styles/main.scss'

export default function App() {
  const [cep, setCep] = useState('')
  const [endereco, setEndereco] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChangeCep = target => setCep(target.value)

  const handleSubmitCep = e => {
    e.preventDefault()

    if (cep === '') {
      toast.error('O campo CEP não pode ser vazio')
      return
    }

    if (limpaString(cep).length < 8) {
      toast.error('CEP inválido')
      return
    }

    setIsLoading(true)

    axios
      .get(`https://viacep.com.br/ws/${limpaString(cep)}/json/`)
      .then(({ data }) => {
        if ('erro' in data) {
          toast.error('CEP não encontrado')
          return
        }

        setEndereco(data)
      })
      .catch(error => {
        toast.error(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (cep === '') {
      setEndereco(null)
    }
  }, [cep])

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={5000} />
      <main className="container">
        <form className="search" onSubmit={handleSubmitCep}>
          <Label id="cep">CEP</Label>
          <div className="search__item">
            <Input
              type="search"
              name="cep"
              id="cep"
              placeholder="Digite aqui o CEP desejado"
              mask={maskCep}
              value={cep}
              handleChangeCep={handleChangeCep}
            />
            <Button type="submit">
              <FaSearchLocation />
            </Button>
          </div>
        </form>

        {isLoading && <p>Buscando cep...</p>}

        {endereco !== null ? <Resultado endereco={endereco} /> : null}
      </main>
    </>
  )
}
