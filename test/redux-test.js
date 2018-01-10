const coolActionCreator = (someArgument) => {
  return {
    type: 'COOL_ACTION',
    someArgument,
  }
}

const coolReducer = (prevState = {}, action) => {
  switch (action.type) {
    case 'COOL_ACTION':
      return {
        ...prevState,
        newThing: action.someArgument,
      }
  }
  return prevState
}
