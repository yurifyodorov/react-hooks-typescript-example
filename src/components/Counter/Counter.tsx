import React from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter">
      <p>You clicked {count} times</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Counter;
