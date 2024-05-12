describe('Pokedex', function() {
  beforeEach(function() {
    cy.visit('http://localhost:5001')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('pokemon can be navigated to', function() {
    cy.contains('ivysaur').click()
    cy.contains('overgrow')
  })
})
