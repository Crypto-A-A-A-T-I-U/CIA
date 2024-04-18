import { Bracket, IRoundProps } from 'react-brackets'

export default function Brackets() {
  return (
    <div className="flex">
      <div className="bg-bracketMenu w-1/5"></div>
      <div className="bg-bracket w-4/5 p-10">
        <h3 className="mb-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight">
          Playoffs
        </h3>
        <Bracket rounds={rounds}/>
      </div>
    </div>
  )
}

const rounds: IRoundProps[] = [
  {
    title: 'Primeira rodada',
    seeds: [
      {
        id: 1,
        date: '27/04/2024',
        teams: [{ name: 'Jogador 1' }, { name: 'Jogador 2' }],
      },
      {
        id: 2,
        date: new Date(2024, 3, 27).toDateString(),
        teams: [{ name: 'Jogador 3' }, { name: 'Jogador 4' }],
      },
      {
        id: 3,
        date: '27/04/2024',
        teams: [{ name: 'Jogador 5' }, { name: 'Jogador 6' }],
      },
      {
        id: 4,
        date: new Date(2024, 3, 27).toDateString(),
        teams: [{ name: 'Jogador 7' }, { name: 'Jogador 8' }],
      },
    ],
  },
  {
    title: 'Segunda rodada',
    seeds: [
      {
        id: 1,
        date: '28/04/2024',
        teams: [{ name: 'Jogador 1' }, { name: 'Jogador 3' }],
      },
      {
        id: 2,
        date: '28/04/2024',
        teams: [{ name: 'Jogador 5' }, { name: 'Jogador 7' }],
      },
    ],
  },
  {
    title: 'Terceira rodada',
    seeds: [
      {
        id: 1,
        date: '04/05/2024',
        teams: [{ name: 'Jogador 1' }, { name: 'Jogador 5' }],
      },
    ],
  },
  {
    title: 'Campeão',
    seeds: [
      {
        id: 1,
        date: '28/04/2024',
        teams: [{ name: 'Felps' }],
      },
    ],
  },
]
