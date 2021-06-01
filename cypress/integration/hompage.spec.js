describe("Homepage tests", () => {
  it("should load the homepage and scroll down the content.", () => {
    cy.visit('/');

    // The URL still has .html extension.
    // @todo Remove the extension by converting the page to a Next.js page...or serve it via
    //  Express.
    cy.url().should('eq', 'http://localhost:3000/index.html');
    cy.contains('The Campaign for the University of Colorado');

    // @todo Fill in by scrolling down...
    cy.get('#section-2').scrollIntoView();
    cy.contains('CU is essential.');
  });

  it('should load header links', function () {
    cy.visit('/');

    // @todo This should go to essential.cu.edu and not the Giving site.
    cy.get('.header-inner .logo').should('have.attr', 'href', 'https://giving.cu.edu/')
      .and('have.attr', 'title', 'Home');

    // Check other links.
    cy.get('a[href="https://giving.cu.edu/guide-giving"]').should('exist');
    cy.get('a[href="https://essential.cu.edu"]').should('exist');
    cy.get('a[href="https://giving.cu.edu/about-us"]').should('exist');
    cy.get('a[href="https://giving.cu.edu/fund-search"]').should('exist');
  });
})
