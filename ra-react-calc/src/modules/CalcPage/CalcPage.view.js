import React, { Component } from 'react'
import CalcForm from '../../components/CalcForm'
import CalcTextInput from '../../components/CalcTextInput'
import CalcButton from '../../components/CalcButton'
import './CalcPage.css'
import {
  Card,
  CardActions,
  CardHeader,
  TextField,
  CardContent
} from 'material-ui'

export default class CalcPage extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      a:0,
      b:0, 
      action:'',
      res: 0
    }
    
    this.do = this.do.bind(this)
  
    this.handleaChange = this.handleaChange.bind(this)
    this.handlebChange = this.handlebChange.bind(this)
  }

  do(actstr)
  {
    const { aact } = this.props
    const { state } = this
    aact({ a:state.a, b:state.b, action: actstr, res: state.res })
  }

  handleaChange(e) {
      this.setState({a: e.target.value});
  }
  handlebChange(e) {
      this.setState({b: e.target.value});
  }
  
  render () {
    const { state } = this
    const { res } = this.props

    return (
      <div>
        <h2>Calculator</h2>
        <table>
        <thead>
          <tr><td>Calculator</td></tr>
        </thead>
        <tbody>
        <tr>
          <td>
            <TextField
                  label='a'
                  onChange={this.handleaChange}
                  value={state.a}
                />
          </td>
          <td className="actionCell">
            <CalcButton 
                name={'mul'}
                action={this.do('*')}
                label={'x'}/>
            <CalcButton 
                name={'div'}
                action={this.do('/')}
                label={'/'}/>
            <CalcButton 
                name={'add'}
                action={this.do('+')}
                label={'+'}/>
            <CalcButton 
                name={'sub'}
                action={this.do('-')}
                label={'-'}/>
          </td>
          <td>
              <TextField
                  label='b'
                  onChange={this.handlebChange}
                  value={state.b}
                />
          </td>
          <td>
            =
          </td>
          <td>
            <label>{res}</label>
          </td>
        </tr>
        </tbody>
      </table>
      </div>
    )
  }
}

