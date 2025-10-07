import React from "react"
import '../styles/GamesPage.css'; // Vamos criar um CSS específico para a página de jogos

function GamesPage () {
    return (
       <div className="games-page-container">
      <h2>Jogos e Resultados</h2>
      <p>Acompanhe todos os confrontos do campeonato.</p>
      {/* Aqui virão os jogos, separados por data */}

      {/* Exemplo de um separador de data */}
      <h3 className="game-date-separator">11 de Outubro</h3>
      <div className="game-list">
        {/* Futuramente, você terá componentes GameCard aqui */}
        <p>Riacho do Tigre vs Juventus (16:30)</p>
        <p>Pasta FC vs Cachoeirinha (18:30)</p>
      </div>

      <h3 className="game-date-separator">05 de Outubro</h3>
      <div className="game-list">
        <p>Plejusc 1 x 3 Cachoeirinha</p>
        <p>Trem das Onze 2 x 6 Juventus</p>
      </div>

      <h3 className="game-date-separator">04 de Outubro</h3>
      <div className="game-list">
        <p>Cruz Azul 3 x 0 Assentamento</p>
        <p>Barra Nova 1 x 1 Cangati</p>
      </div>
    </div>
            
    )
}

export default GamesPage;