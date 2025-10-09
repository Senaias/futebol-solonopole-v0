import ClassificationTable from '../components/ClassificationTable'
import './HomePage.css'

const groupATeams = [
  { id: 1, name: 'Barra Nova', P: 1, V: 0, E: 1, D: 0, GP: 1, GC: 1, SG: 0 },
  { id: 2, name: 'Cangati', P: 1, V: 0, E: 1, D: 0, GP: 1, GC: 1, SG: 0 },
  { id: 3, name: 'Plejusc', P: 0, V: 0, E: 0, D: 1, GP: 1, GC: 3, SG: -2 },
  { id: 4, name: 'Cachoeirinha', P: 3, V: 1, E: 0, D: 0, GP: 3, GC: 1, SG: 2 },
  { id: 5, name: 'Pasta', P: 0, V: 0, E: 0, D: 0, GP: 0, GC: 0, SG: 0 },
]

const groupBTeams = [
  { id: 1, name: 'Cruz Azul', P: 3, V: 1, E: 0, D: 0, GP: 3, GC: 0, SG: 3 },
  {
    id: 2,
    name: 'Assentamento (St. Tereza)',
    P: 0,
    V: 0,
    E: 0,
    D: 1,
    GP: 0,
    GC: 3,
    SG: -3,
  },
  {
    id: 3,
    name: 'Trem das Onze',
    P: 0,
    V: 0,
    E: 0,
    D: 1,
    GP: 2,
    GC: 6,
    SG: -4,
  },
  { id: 4, name: 'Juventus', P: 3, V: 1, E: 0, D: 0, GP: 6, GC: 2, SG: 4 },
  {
    id: 5,
    name: 'Riacho do Tigre',
    P: 0,
    V: 0,
    E: 0,
    D: 0,
    GP: 0,
    GC: 0,
    SG: 0,
  },
]

function HomePage() {
  return (
    <div className="home-page-container">
      <p>Bem vind@! Aqui você pode acompanhar o andamento da primeira divisão do Campeonato Municipal de Futebol de Solonópole/CE 2025.</p>
      <h2>Classificação</h2>

      <div className="classification-tables-grid">
        {/* Grid para as tabelas */}
        <ClassificationTable groupName="A" teams={groupATeams} />
        {/* <div className="groups-spacer"></div> */}
        <ClassificationTable groupName="B" teams={groupBTeams} />
      </div>
    </div>
  )
}

export default HomePage
