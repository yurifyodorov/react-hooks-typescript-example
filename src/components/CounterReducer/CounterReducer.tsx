import * as React from 'react';

interface State {
  count: number;
}

type Actions = 'reset' | 'increment' | 'decrement';

interface Action {
  type: Actions;
}

const initialState: State = { count: 0 };

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case 'reset':
      return initialState;
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [state, dispatch] = React.useReducer<React.Reducer<State, Action>>(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button type="button" onClick={() => dispatch({ type: 'reset' })}>
        Reset
      </button>
      <button type="button" onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
      <button type="button" onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
    </>
  );
};

export default CounterReducer;
