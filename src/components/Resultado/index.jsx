import PropTypes from 'prop-types'

export default function Resultado({ endereco }) {
  return (
    <ul className="resultado">
      <li>
        <strong>CEP: </strong>
        {endereco.cep}
      </li>
      <li>
        <strong>Logradouro: </strong>
        {endereco.logradouro}
      </li>
      <li>
        <strong>Complemento: </strong>
        {endereco.complemento}
      </li>
      <li>
        <strong>Bairro: </strong>
        {endereco.bairro}
      </li>
      <li>
        <strong>Localidade: </strong>
        {endereco.localidade} - {endereco.uf}
      </li>
    </ul>
  )
}

Resultado.propTypes = {
  endereco: PropTypes.object,
}
