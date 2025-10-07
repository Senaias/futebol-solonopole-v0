import React from "react";
import './ClassificationTable.css';

// Dados de exemplo para o time (você vai buscar isso do Firebase depois)
// Pontos (P), Vitórias (V), Empates (E), Derrotas (D), Gols Pró (GP), Gols Contra (GC), Saldo de Gols (SG)
const initialTeamsData = [
  { id: 1, name: 'Time Alfa', logo: null, P: 10, V: 3, E: 1, D: 0, GP: 8, GC: 2, SG: 6 },
  { id: 2, name: 'Time Beta', logo: null, P: 7, V: 2, E: 1, D: 1, GP: 5, GC: 3, SG: 2 },
  { id: 3, name: 'Time Gama', logo: null, P: 4, V: 1, E: 1, D: 2, GP: 3, GC: 5, SG: -2 },
  { id: 4, name: 'Time Delta', logo: null, P: 3, V: 1, E: 0, D: 3, GP: 4, GC: 7, SG: -3 },
  { id: 5, name: 'Time Épsilon', logo: null, P: 1, V: 0, E: 1, D: 3, GP: 2, GC: 5, SG: -3 },
];

const ClassificationTable = ({ groupName, teams = initialTeamsData }) => {
  // Ordena os times: Pontos > SG > GP > Name
  const sortedTeams = [...teams].sort((a, b) => {
    if (a.P !== b.P) return b.P - a.P; // Pontos (maior primeiro)
    if (a.SG !== b.SG) return b.SG - a.SG; // Saldo de Gols (maior primeiro)
    if (a.GP !== b.GP) return b.GP - a.GP; // Gols Pró (maior primeiro)
    return a.name.localeCompare(b.name); // Nome (ordem alfabética)
  });

   return (
    <div className="classification-table-container">
      <h3>Grupo {groupName}</h3>
      <div className="table-responsive"> {/* Adicionado para melhor visualização em mobile */}
        <table className="classification-table">
          <thead className="table-header">
            <tr>
              <th></th>
              <th>Time</th>
              <th>P</th>
              <th>V</th>
              <th>E</th>
              <th>D</th>
              <th>GP</th>
              <th>GC</th>
              <th>SG</th>
            </tr>
          </thead>
          <tbody>
            {sortedTeams.map((team, index) => (  
              <tr key={team.id}>
                <td>{index + 1}º</td>
                <td className="team-name-cell">
                  {/* adicionar logo aqui dps <img src={team.logo} alt={team.name} className="team-logo" /> */}
                  {team.name}
                </td>
                <td>{team.P}</td>
                <td>{team.V}</td>
                <td>{team.E}</td>
                <td>{team.D}</td>
                <td>{team.GP}</td>
                <td>{team.GC}</td>
                <td>{team.SG}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassificationTable;