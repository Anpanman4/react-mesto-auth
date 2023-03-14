import React from "react";

import logo from "../images/logo.svg"
import burger from "../images/burger.svg"
import close from "../images/Close-Icon.svg"

function Header({altText, burgerClicked, handleBurgerClick}) {
  // const url = window.location.pathname;

  return (
    <>
      {
      burgerClicked &&
      <div className="header__container-mobile">
        <p className="header__mail">Anpan@mail.ru</p>
        <p className="header__exit">Выйти</p>
      </div>
      }
      <header className="header">
        <img src={logo} className="header__logo" alt={altText} />
        <div className="header__container">
          <p className="header__mail">Anpan@mail.ru</p>
          <p className="header__exit">Выйти</p>
        </div>
        {
          burgerClicked ?
          <img src={close} alt="Открыть бургер" className="header__close-button" onClick={() => handleBurgerClick(false)} /> :
          <img src={burger} alt="Закрыть бургер" className="header__burger" onClick={() => handleBurgerClick(true)} />
        }
      </header>
    </>
  )
}

export default Header