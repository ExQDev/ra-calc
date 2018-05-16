import log from '../../utils/log'

export default async ({ payload, emitAction, db, sessionData }) => {
  let result
  let { a } = payload
  let { b } = payload
  let { action } = payload

  try {
    // switch(action)
    // {
    //   case "*":
    //     result = a * b;
    //     break
    //   case "+":
    //     result = a + b;
    //     break;
    //   case "-":
    //     if(b < 0)
    //       {
    //         b = b * -1
    //         result = a + b
          
    //       }else{
    //         result = a - b;
    //       }
    //     break
    //   case "/":
    //     result = a / b;
    //     break
    // }
    var val = "" + a + " " + action + " " + b;
    result = eval(val);
    emitAction('RESULT_ACT', { a: a, b: b, action: action, result: result })
  } catch (error) {
    emitAction('SNACK', {
      message: 'Something went wrong...'
    })
    log.err(error)
  }
  //emitAction('SNACK', { a, b, action, result })
  // emitAction('USERS_LIST', {usersList, 'canLoadMore':false})
}
