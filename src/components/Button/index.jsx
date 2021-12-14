import PropTypes from 'prop-types'

export default function Button({ type, children, classname }) {
  return (
    <button className={classname} type={type}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button',
  classname: 'default-button',
}

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  classname: PropTypes.string,
}
