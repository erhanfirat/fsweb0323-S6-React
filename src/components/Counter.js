import { useState } from "react";

import CounterDisplay from "./CounterDisplay";

const Counter = () => {
  const [sayac, setSayac] = useState(0);

  return (
    <div>
      <CounterDisplay counter={sayac} />
      <button
        onClick={() => {
          setSayac(sayac + 1);
        }}
      >
        Arttır
      </button>
      <button
        onClick={() => {
          setSayac(sayac - 1);
        }}
      >
        Azalt
      </button>
    </div>
  );
};

export default Counter;
