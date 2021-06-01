describe('Annual Report 2019: Together', function () {
  it('should load the homepage and navigate through a story/financials/mission', function () {
    cy.visit('/impact-reports/together');
    cy.get('h1').contains('We’re in this together');

    // Scrolls to the partnership section.
    cy.get('a[href="#partnership"]').click();

    cy.get('#partnership').within(($el) => {
      cy.contains('Your partnership is essential.');
      cy.get('a[href="#stories"]').click();
    });

    cy.get('img[alt="Resilience"]').click();
    cy.url().should('equal', 'http://localhost:3000/impact-reports/together/story/resilience');
    cy.get('button[aria-label="Next"]').click();

    cy.get('h2').contains('The fury of war');
    cy.get('button[aria-label="Next"]').click();

    cy.contains('My door was jammed. I couldn\'t open my door.');

    cy.get('button.nav-main-toggle').click();
    cy.contains('Financials').click();
    cy.url().should('equal', 'http://localhost:3000/impact-reports/together/financials');
    cy.contains('CU philanthropy by the numbers');
    cy.get('button[aria-label="Next"]').click();
    cy.contains('You set a new record—thank you!');

    cy.get('button.nav-main-toggle').click();
    cy.contains('Mission').click();
    cy.url().should('equal', 'http://localhost:3000/impact-reports/together#mission');
    cy.contains('Our Mission');

  });
});
