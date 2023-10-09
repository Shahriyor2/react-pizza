import React from "react";

function Inputs({setisOrderComplete, isOrderComplete}) {
  console.log(isOrderComplete);
  return(
  <div className="Validation">
    <h1>Контактная информация</h1>
    <div className="inputs d-flex flex-column justify-center align-center">
      <span>Имя</span>
      <input type="name" placeholder="Фамилия Имя" required></input>
      <span>Телефон</span>
      <input
        type="number"
        name="tel"
        pattern=" [0-9]{,9}"
        placeholder="Номер телефона +992"
        required
      ></input>
      <span>Email</span>
      <input
        type="email"
        name="login"
        pattern=" [0-9]{,9}"
        placeholder="адресс электронной почты"
        required
      ></input>
      <button onClick={() => setisOrderComplete(true)}>Отправить</button>
    </div>
  </div>
  );
}

export default Inputs;