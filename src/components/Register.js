import React from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <>
      <section className="sign">
        <h1 className="sign__title">Регистрация</h1>
        <form className="sign__form">
          <input className="sign__input" type="email" name="Email" placeholder="Email" autoComplete="off" required minLength="2" maxLength="40" />
          <input className="sign__input" type="password" name="password" placeholder="Пароль" autoComplete="off" required minLength="2" maxLength="40" />
          <button className="sign__button">Зарегистрироваться</button>
        </form>
        <p className="sign__change">Уже зарегистрированы? <span className="sign__change-button" onClick={() => navigate("/sign-in")}>Войти</span></p>
      </section>
    </>
  )
}

export default Register