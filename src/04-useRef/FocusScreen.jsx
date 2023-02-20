import React, { useRef } from "react";

export const FocusScreen = () => {
  const inpurtRef = useRef();

  const onClick = () => {
    // document.querySelector('input').focus();
    inpurtRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inpurtRef}
        className="form-control"
        type="text"
        placeholder="Ingrese su nombre"
      />
    

      <button className="btn btn-primary mt-2" onClick={onClick}>
        set focus
      </button>
    </>
  );
};
