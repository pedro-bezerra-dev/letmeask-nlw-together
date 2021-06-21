import { useState } from 'react';

export function Button() {
  let [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter + 1)
    console.log(counter)
  }

  return (
    <div>
      <button  onClick={increment}>
        Você clicou em mim {counter} vezes
      </button>
    </div>
  );
}