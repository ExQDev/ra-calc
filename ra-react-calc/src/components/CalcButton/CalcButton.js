import React from 'react'
import PropTypes from 'prop-types'

const CalcButton = props => {
  return (
    <button onClick={props.action}>{props.label}</button>
  )
}

const { string, func } = PropTypes

CalcButton.propTypes = {
  name: string.isRequired,
  label: string,
  action: func
}

export default CalcButton
