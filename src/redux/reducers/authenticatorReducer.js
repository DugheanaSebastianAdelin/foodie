const initialState = {
  userToken: '',
  email: '',
  error: '',
  isLoading: false,
};

const authenticatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_WITH_EMAIL_AND_PASSWORD': {
      return {
        ...state,
        userToken: action.payload.userToken,
        email: action.payload.email,
      };
    }
    case 'REGISTER_WITH_EMAIL_AND_PASSWORD': {
      return {
        ...state,
        userToken: action.payload.userToken,
        email: action.payload.email,
      };
    }

    case 'SIGN_OUT': {
      return {
        ...state,
        userToken: initialState.userToken,
        email: initialState.email,
      };
    }
    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case 'ERROR': {
      return {
        ...state,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default authenticatorReducer;
