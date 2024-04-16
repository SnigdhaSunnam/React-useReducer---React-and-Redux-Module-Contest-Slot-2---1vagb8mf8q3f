import React, { useReducer } from 'react';
import '../styles/App.css';

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  SET_SUB_NUM: "setSubNum",
  SET_ADD_NUM: "setAddNum"
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {
        ...state,
        count: state.count + state.addNum
      };
    case ACTIONS.DECREMENT:
      return {
        ...state,
        count: state.count - state.subNum
      };
    case ACTIONS.SET_SUB_NUM:
      return {
        ...state,
        subNum: parseInt(action.payload)
      };
    case ACTIONS.SET_ADD_NUM:
      return {
        ...state,
        addNum: parseInt(action.payload)
      };
    default:
      return state;
  }
}

const App = () => {
  const initialState = {
    count: 10,
    subNum: 1,
    addNum: 1
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function onIncrement() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function onDecrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  const onAddInput = (e) => {
    dispatch({
      type: ACTIONS.SET_ADD_NUM,
      payload: e.target.value
    });
  };

  const onSubtractInput = (e) => {
    dispatch({
      type: ACTIONS.SET_SUB_NUM,
      payload: e.target.value
    });
  };

  return (
    <div id="main">
      <input id='subtractInput' value={state.subNum} onChange={onSubtractInput} /><br />
      <button id='subtractBtn' onClick={onDecrement}>Subtract</button>
      <p id='count'>{state.count}</p>
      <button id='addBtn' onClick={onIncrement}>Add</button><br />
      <input id='addInput' onChange={onAddInput} value={state.addNum} />
    </div>
  );
}

export default App;
