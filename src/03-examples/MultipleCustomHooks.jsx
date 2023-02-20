import { useCounter, useFetch } from "../hooks";
import { Character, LoadingCharacter } from "../03-examples";



export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
  const { image, name } = !!data && data;

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        isLoading ? <LoadingCharacter />: <Character image={image} name={name}/>
      }
    

      <button disabled={isLoading} onClick={() => increment(1)} className="btn btn-primary mt-3">
        Next Character
      </button>
    </>
  );
}
