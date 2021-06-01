describe('Annual Report 2018: Picture This', function () {
  it('should load the homepage', function () {
    cy.visit('/impact-reports/picture-this');
    cy.url().should('equal', 'http://localhost:3000/impact-reports/picture-this/index.html');

    cy.get('ul.menu.show-for-large').within(($el) => {
      cy.contains('Impact Stories').click();
      cy.url().should('equal', 'http://localhost:3000/impact-reports/picture-this/impact-stories.html');
    });

    cy.contains('CU is transforming tomorrow').click();
    cy.url().should('equal', 'http://localhost:3000/impact-reports/picture-this/stories/student-success.html');
    cy.contains('Tyler Cowan at home in Pagosa Springs, Colorado (Photo by Glenn Asakawa)');

    cy.get('ul.menu.show-for-large').within(($el) => {
      cy.contains('Financials').click();
      cy.url().should('equal', 'http://localhost:3000/impact-reports/picture-this/financials.html');
      // cy.contains('Donors invest through CU');
    });
  });
});
