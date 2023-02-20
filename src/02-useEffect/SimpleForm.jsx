import { useEffect, useState } from "react";
import { Messsage } from "./Messsage";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'niko',
    email: 'niko@gmail.com'
  });
  
  const { username, email } = formState;


  const onInputChange = ({target}) => {
    const { name, value } = target;
    setFormState({
        ...formState,
        [name]: value
    })
  }

  useEffect(() => {
    // console.log('useEffect');
  }, []);

  useEffect(() => {
    // console.log('formState change');
  }, [formState]);

  useEffect(() => {
    // console.log('email change');
  }, [email]);


  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="nicolas@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {
        (username === 'niko') && <Messsage />
      }
      
    </>
  );
};
