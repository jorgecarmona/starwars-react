import React, {useState} from "react";

import {useForm} from 'react-hook-form';
import {ENGButton} from "../components/atoms";

const Hooks = () => {
  
  const {register, errors, handleSubmit} = useForm();

  const [Entradas, setEntradas] = useState([]);

  const onSubmit = (data, e) => {
    console.log(data)
    setEntradas([
      ...Entradas,
      data
    ])
    e.target.reset();
  }
  const buttonHandler = () => {
    console.log("le picaron ");
  };


  return (
      <div className="App">
        <h1>STAR WARS</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input 
            name="StarWars"
            placeholder="Ingrese Nombre"
            className="form-control my-2"
            ref={
              register({
                required: {value: true, massage: 'campo obligatorio'},
                minLength: {value: 4, massage: 'Minimo 4 letras'}
              })
            }
          />
        { errors.StarWars &&
          <span className="text-danger text-small d-block mb-2">
            {errors.StarWars.massage}
          </span>}
          <input 
            name="Password"
            placeholder="Ingrese Contraseña"
            className="form-control my-2"
            ref={
              register({
                required: {value: true, massage: 'campo obligatorio'},
                minLength: {value: 4, massage: 'Minimo 4 letras'}
              })
            }
          />
          { errors.Password &&
          <span className="text-danger text-small d-block mb-2">
            {errors.Password.massage}
          </span>}
        </form>
        <ul>
          {
            Entradas.map(item => 
             <li>{item.StarWars} - {item.Password}</li> 
            )
          }
        </ul>
        <ENGButton variant="contained" onClick={buttonHandler}>
          Hola Chicos!
        </ENGButton>
      </div>
  ); 
}
export default App;