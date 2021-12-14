export const maskCep = () => [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
]

export const limpaString = str => str.replace(/[^a-zA-Z0-9]/g, '')
