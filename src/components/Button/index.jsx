import PropTypes from 'prop-types'

export default function Button({ type, children, classname, ...props }) {
  return (
    <button className={classname} type={type} {...props}>
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
  children: PropTypes.any.isRequired,
  classname: PropTypes.string,
}
