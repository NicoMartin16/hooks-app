import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterationNumber = 100) => {

    for(let i = 0; i < iterationNumber; i++) {
        console.log('Ahí vamos...');
    }

    return `${iterationNumber} iteraciones realizadas`;

}


export const MemoHook = () => {

  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  const messageMemorize = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />

      <h4>{ messageMemorize}</h4>

      <button type="button" onClick={() => increment()} class="btn btn-primary">
        +1
      </button>

      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
