import React from "react";
import logo from "../images/logo.svg"
import burger from "../images/burger.svg"
import close from "../images/Close-Icon.svg"

function Header({altText, burgerClicked, handleBurgerClick}) {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt={altText} />
      {
        burgerClicked ?
        <img src={close} className="header__close-button" onClick={() => handleBurgerClick(false)} /> :
        <img src={burger} className="header__burger" onClick={() => handleBurgerClick(true)} />
      }
    </header>
  )
}

export default Header