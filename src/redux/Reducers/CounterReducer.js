import { ADD, SUB } from "./../ActionTypes";

initialState = {
  counter: 0
};

export default CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        counter: state.counter + 1
      };
    case SUB:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};
