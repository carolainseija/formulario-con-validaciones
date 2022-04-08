//leccion 206 quede en form hacer que funcvione el disabled de los colores puestos con css.
import React, { useEffect, useRef, useState } from 'react';

const SimpleInput = (props) => {

  const nameInputRef = useRef('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredIsValid] = useState("null");
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      setFormIsValid(true)
    } else {
      setFormIsValid(false)
    }
  }, [enteredNameIsValid])

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();
    if (enteredName.trim() === '') {
      setEnteredIsValid("invalid")
      return;
    }
    setEnteredIsValid("valid")
    console.log(enteredName)
    const enteredValue = nameInputRef.current.value; //ver si esto se utiliza 
    setEnteredName('')
  }

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Su Nombre: </label>
        <input ref={nameInputRef} onChange={nameInputChangeHandler} value={enteredName} type='text' id='name' />
        {enteredNameIsValid === "invalid" && <p className='error-text'>El nombre no debe estar vacio</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Enviar</button>
      </div>
    </form>
  );
};

export default SimpleInput;
