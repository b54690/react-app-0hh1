import board from './board'

describe('board reducer', () => {
  const reducer = board
  const initialState = [
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,0],
  ]

  it('returns grid array for the initial state', () => {
    expect(reducer()).toEqual(initialState)
  })
})
