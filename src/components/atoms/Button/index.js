import React from 'react'
import PropTypes from 'prop-types'

Button.propTypes = {
  innerText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func
}

export default function Button (props) {
  const { onButtonClick, innerText } = props

  return (
    <button type='button' onClick={onButtonClick}>{innerText}</button>
  )
}
