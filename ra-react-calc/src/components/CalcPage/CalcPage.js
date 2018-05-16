import React from 'react'
import { Link } from 'react-router-dom'
import './CalcPage.css'
import CalcTextInput from '../CalcTextInput'

// Since this component is simple and static, there's no parent container for it.
const CalcPage = () => {
  return (
    <div>
      <h2 className='alt-header'>Calculator</h2>
      <table>
        <th>Calculator</th>
        <tbody>
        <tr>
          <td>
            <CalcTextInput
                  name='a'
                  value={0}
                />
          </td>
          <td>
            
          </td>
          <td>
            <CalcTextInput
                  name='b'
                  value={0}
                />
          </td>
          <td>
            =
          </td>
          <td>
            
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CalcPage
