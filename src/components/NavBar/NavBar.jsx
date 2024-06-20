import React from "react";
import logoNav from "../../assets/images/mars.png";
import "../NavBar/styles.css";

// o export class é uma boa prática para que o nome do componente, quando importado no jsx principal não seja alterado posteriormente, dando consistência ao código

export class NavBar extends React.Component { 
    render() {
    return ( 
    <header>
      <nav id="navbar">
        <div className="nav-brand">
            <img id="mars-logo" src={logoNav} alt="" />
            <h2>Manual de Recém-ingressos</h2>
        </div>

        <ul className="nav-list">
          <li><a href="/">Sobre o manual</a></li>
          <li><a href="/">Sobre a Pesquisa</a></li>
          <li><a href="/">Equipe</a></li>

        </ul>
      </nav>
    </header>
    )

    }

}