const API_KEY = 'nrGnG2vPRIN3tdQBFvFLMnriBCRxtMcffJCdYpZaV4F9Igqwgp1B8LJFhLHXjlem'

export enum mapPath {
  STREET = 'https://tile.jawg.io/jawg-streets/{z}/{x}/{y}{r}.png?access-token=' + API_KEY,
  LAGOON = 'https://tile.jawg.io/jawg-lagoon/{z}/{x}/{y}{r}.png?access-token=' + API_KEY,
  SUNNY = 'https://tile.jawg.io/jawg-sunny/{z}/{x}/{y}{r}.png?access-token=' + API_KEY,
  LIGHT = 'https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=' + API_KEY,
  TERRAIN = 'https://tile.jawg.io/jawg-terrain/{z}/{x}/{y}{r}.png?access-token=' + API_KEY,
  DARK = 'https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token=' + API_KEY,
}
