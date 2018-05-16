import React from 'react'
import PropTypes from 'prop-types'

const CalcTextInput = props => {
  const handleChange = e => {
    props.onChange(props.name, e.target.value)
  }

  return (
    <input
      className='small'
      type='text'
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange}
    />
  )
}

const { string, func, number, oneOfType } = PropTypes

CalcTextInput.propTypes = {
  name: string.isRequired,
  onChange: func.isRequired,
  placeholder: string,
  value: oneOfType([string, number])
}

export default CalcTextInput
