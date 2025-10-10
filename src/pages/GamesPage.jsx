import '../styles/GamesPage.css' // Vamos criar um CSS específico para a página de jogos
import VsIcon from '../assets/vs-icon.svg'
import { schedule } from '../constants/games'

function GamesPage() {
  return (
    <div className="games-page-container">
      <span className="title">Jogos e Resultados</span>

      {schedule.map((schedule, index) => (
        <div className="game-container" key={index}>
          <div className="game-date-separator">
            <span className="game-date">{schedule.day}</span>
          </div>

          {schedule.games.map((game, _index) => (
            <div className="game-list" key={_index}>
              <div className="match-card">
                <span className="team-name-scoreboard-left" title={game.teamA}>
                  {game.teamA}
                </span>
                <span className="scoreboard">
                  {' '}
                  {game.scoreA}{' '}
                  <img src={VsIcon} className="vs-icon" alt="vs" />{' '}
                  {game.scoreB}{' '}
                </span>
                <span className="team-name-scoreboard-right" title={game.teamB}>
                  {game.teamB}
                </span>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* 

      <h3 className="game-date-separator">11 de Outubro</h3>
      <div className="game-list">

        <div className="match-card">
            <span className="team-name-scoreboard-left">Riacho do Tigre</span> 
            <span className="scoreboard"> <img src={VsIcon} className="vs-icon" alt="vs" /> </span> 
            <span className="team-name-scoreboard-right">Juventus</span>
          </div>

          <div className="match-card">
            <span className="team-name-scoreboard-left">Pasta</span> 
            <span className="scoreboard"> <img src={VsIcon} className="vs-icon" alt="vs" /> </span> 
            <span className="team-name-scoreboard-right">cachoeirinha</span>
          </div>
        
      </div>

      <h3 className="game-date-separator">05 de Outubro</h3>
      <div className="game-list">
        
          <div className="match-card">
            <span className="team-name-scoreboard-left">Plejusc</span> 
            <span className="scoreboard"> 1 <img src={VsIcon} className="vs-icon" alt="vs" /> 3 </span> 
            <span className="team-name-scoreboard-right">Cachoeirinha</span>
          </div>

          <div className="match-card">
            <span className="team-name-scoreboard-left">Trem das Onze</span> 
            <span className="scoreboard"> 2 <img src={VsIcon} className="vs-icon" alt="vs" /> 6 </span> 
            <span className="team-name-scoreboard-right">Juventus</span>
          </div>
          
      </div>

      <h3 className="game-date-separator">04 de Outubro</h3>
      <div className="game-list">

        <div className="match-card">
            <span className="team-name-scoreboard-left">Cruz Azul</span> 
            <span className="scoreboard"> 3 <img src={VsIcon} className="vs-icon" alt="vs" /> 0 </span> 
            <span className="team-name-scoreboard-right">Assentamento (St. Tereza)</span>
          </div>

          <div className="match-card">
            <span className="team-name-scoreboard-left">Barra Nova</span> 
            <span className="scoreboard"> 1 <img src={VsIcon} className="vs-icon" alt="vs" /> 1 </span> 
            <span className="team-name-scoreboard-right">Cangati</span>
          </div>

      </div>
 */}
    </div>
  )
}

export default GamesPage
