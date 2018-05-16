import objectAssign from 'object-assign'

import createReducer from '../../utils/createReducer'

const DO_ACT = 'socket/DO_ACT'
const RES_ACT = 'RESULT_ACT'
// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
const initialState = {
  a:0,
  b:0,
  result:0,
  action: '',
  res: 0,
}

export const aact = ({ a, b, action, res }) => ({
  type: DO_ACT,
  payload: { a, b, action, res }
})

export const ract = ({ a, b, action, result }) => ({
  type: RES_ACT,
  payload: { a, b, action, result }
})

const calcReducers = {
  [DO_ACT]: (state, payload) => {
    return {
      ...state,
      ...payload,
      res : state.res,
    }
  },
  [RES_ACT]: (state, payload) =>{
    return { 
        ...payload,
        res: payload.result
      }
  }
}

export const calcReducer = (state = initialState, action) => {
  let reducer = calcReducers[action.type]
  return reducer ? reducer(state, action.payload) : state
}

//export const calcState = createReducer(calcReducer, CalcState)