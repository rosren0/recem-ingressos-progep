import React from "react";
// criar variáveis para importar arquivos
import "./styles/App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Hero } from "./components/Hero/Hero";
import Card  from "./components/Card/Card";
// import SearchBar from "./components/SearchBar/SearchBar"

// import { SplineComp } from "./components/SplineComp/SplineComp";

// componente em classe é uma classe que herda a classe Component do React e retorna html dentro do método render()

class App extends React.Component {  // sintaxe para app como class em react

  // super herda tudo que vem do componente mãe, que é o React.Component
  // this.algo nomeia e adiciona uma variável

  // renderização html do componente
  render() { 
    return (
    <div>
     <NavBar />
     <Hero />

     {/* <SearchBar /> */}
     
     <div className="cards">
      <Card
        title="Card 1"
        content="Este é o conteúdo do Card 1."
        footer={<button>Botão do Card 1</button>}
      />
      <Card
        title="Card 2"
        content="Este é o conteúdo do Card 2, que é diferente do Card 1."
        footer={<a href="#">Link do Card 2</a>}
      />
      <Card
        content="Este Card não tem título, apenas conteúdo."
      />
      <Card
        title="Card 4"
        footer={<span>Rodapé sem conteúdo principal.</span>}
      />
    </div>

    </div>
  );
  }
}

export default App;
