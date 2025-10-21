import { useEffect, useState } from 'react'
import { topScorers } from '../../constants/top-scorers'

import './style.css'

function TopScorers() {
  const [players, setPlayers] = useState([])

  function calculateTopScorers() {
    const playersOrdened = topScorers.sort((a, b) => b.countGols - a.countGols)
    let lastGols = null
    let lastPosition = 0

    const rankedScorers = playersOrdened.map((player, index) => {
      if (player.countGols !== lastGols) {
        lastPosition = index + 1
        lastGols = player.countGols
      }

      return {
        ...player,
        position: lastPosition,
      }
    })

    setPlayers(rankedScorers)
  }

  useEffect(() => {
    calculateTopScorers()
  }, [])

  return (
    <div className="container-top-scorers">
      <h2>Artilharia</h2>
      <p>Lista de goleadores</p>

      {players.length > 0 ? (
        <div className="wrapper-table-top-score">
          <div className="table-top-score">
            <div className="header-top-score">
              <span>Jogador</span>
              <span>Gols</span>
            </div>
            {players.map((player, index) => (
              <div className="line" key={index}>
                <div className="container-position">
                  <span className="position">{player.position}</span>
                  <div className="player-container">
                    <span className="player-name" title={player.name}>
                      {player.name}
                    </span>
                    <span>{player.team}</span>
                  </div>
                </div>
                <span>{player.countGols}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="container-emptyState">
          <span>Informação indisponivel no momento.</span>
        </div>
      )}
    </div>
  )
}

export default TopScorers
