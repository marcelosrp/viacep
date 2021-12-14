import PropTypes from 'prop-types'

export default function Input({ type, id, name, placeholder, classname }) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={classname}
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
