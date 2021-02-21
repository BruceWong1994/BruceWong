//reducer是redux的自定义处理器，传参是旧state对象和action，返回的是新state对象
import {
    INCREASE,
    DECREASE,
  } from './actions';
  
  const initialState = {
    number: 0,
  };
  function reducer(state = initialState, action) {
    switch (action.type) {
      case INCREASE:
        return { number:state.number + action.amount };
      case DECREASE:
        return { number:state.number - action.amount };
      default:
        return state;
    }
  }
  
  export default reducer;
  