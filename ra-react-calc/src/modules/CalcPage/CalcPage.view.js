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
    //console.log(calcState)
    this.state = {
      a:0,
      b:0, 
      action:'',
      res: 0
    }
    //console.log(this.state)
    this.do = this.do.bind(this)
    this.mul = this.mul.bind(this)
    this.add = this.add.bind(this)
    this.sub = this.sub.bind(this)
    this.div = this.div.bind(this)
    
    this.handleaChange = this.handleaChange.bind(this)
    this.handlebChange = this.handlebChange.bind(this)
    this.addOne = this.addOne.bind(this)
  }

  addOne() {
    //console.log(this.state)
    //console.log(this.props)
    this.setState({
      res: this.state.res
    })
  }
  
  do(actstr)
  {
    const { aact } = this.props
    const { state } = this
    //console.log(state)
    aact({ a:state.a, b:state.b, action: actstr, res: state.res })
  }

  handleaChange(e) {
      this.setState({a: e.target.value});
  }
  handlebChange(e) {
      this.setState({b: e.target.value});
  }
  mul() {
    this.do('*')
  }
  add() {
    this.do('+')
  }
  div() {
    this.do('/')
  }
  sub() {
    this.do('-')
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
                action={this.mul}
                label={'x'}/>
            <CalcButton 
                name={'div'}
                action={this.div}
                label={'/'}/>
            <CalcButton 
                name={'add'}
                action={this.add}
                label={'+'}/>
            <CalcButton 
                name={'sub'}
                action={this.sub}
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
            <button onClick={ this.addOne }>={ this.state.counter }</button>
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
  
  // render () {
  //   return (
  //     <div>
  //       <CalcForm {...this.props }/>
  //     </div>
  //   )
  // }
}

