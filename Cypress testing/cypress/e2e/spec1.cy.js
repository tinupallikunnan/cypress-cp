//First failing test.Cypress display the failing test in red since true does not equal false.
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(false)
  })
})