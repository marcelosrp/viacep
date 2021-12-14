import PropTypes from 'prop-types'

export default function Label({ id, children, classname = 'default-label' }) {
  return (
    <label className={classname} htmlFor={id}>
      {children}
    </label>
  )
}

Label.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  classname: PropTypes.string,
}
