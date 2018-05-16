import log from '../../utils/log'

export default async ({ payload, emitAction, db, sessionData }) => {
  let result
  let { a, b, action } = payload
  
  try {
    var val = "" + a + " " + action + " " + b;
    result = eval(val);
    emitAction('RESULT_ACT', { a: a, b: b, action: action, result: result })
  } catch (error) {
    emitAction('SNACK', {
      message: 'Something went wrong...'
    })
    log.err(error)
  }
}
