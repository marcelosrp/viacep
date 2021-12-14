import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'

export default function Input({
  type,
  id,
  name,
  placeholder,
  classname,
  cep,
  handleChangeCep,
  mask,
}) {
  return (
    <MaskedInput
      type={type}
      name={name}
      id={id}
      value={cep}
      placeholder={placeholder}
      className={classname}
      onChange={({ target }) => handleChangeCep(target)}
      mask={mask}
    />
  )
}

Input.defaultProps = {
  classname: 'default-input',
  type: 'text',
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  classname: PropTypes.string,
}
