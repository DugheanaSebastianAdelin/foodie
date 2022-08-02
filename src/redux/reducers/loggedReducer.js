let secondState = {
  login:'false',
};

let loginReducer = (state2 = secondState, action) => {
  switch (action.type) {
    case 'SET_LOGGIN_VALUE': {
      let newState2 = {login:action.payload};


      console.log(newState2, '👉');
      return newState2;
    }

    default:
      return state2;
  }
};

export default loginReducer;
