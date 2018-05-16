import log from '../../utils/log'

export default async ({ payload, emitAction, db, sessionData }) => {
  let result
  let { a, b, action } = payload
  
  try {
    switch(action)
    {
      case "*":
      case "+":
      case "-":
      case "/":
        var val = "" + a + " " + action + " " + b;
        result = eval(val);
        break
    }
    emitAction('RESULT_ACT', { a: a, b: b, action: action, result: result })
  } catch (error) {
    emitAction('SNACK', {
      message: 'Something went wrong...'
    })
    log.err(error)
  }
}
