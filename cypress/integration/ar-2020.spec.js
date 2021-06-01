describe('Annual Report 2020: Onward', function () {
  it('should have proper links in the header', function () {
    cy.visit('/impact-reports/onward');
    cy.get('header').within(($el) => {
      cy.get('a[href="/impact-reports/onward"]').should('exist');
      cy.get('a[href="/impact-reports/onward#stories"]').should('exist');
      cy.get('a[href="/impact-reports/onward/financials"]').should('exist');
    })
  });

  // Not testing this since there are a decent number of links and the routes don't get that
  // much traffic.
  xit('should have proper links in the footer', function () {

  });

  it('should load stories', function () {
    cy.visit('/impact-reports/onward');
    cy.contains('Giving is a force for good, especially when the world feels anything but.');

    cy.wait(1000);

    cy.get('.storycard').first().within(($el) => {
      cy.contains('When the pandemic hits close to home').click();
    });
    cy.url().should('equal','http://localhost:3000/impact-reports/onward/sneha-shah-cu-covid-relief-fund');
    cy.contains('Emergency relief funding supports frontline workers and research in response to COVID-19.');

    cy.get('.story-social-bottom').should('exist');

    cy.get('.storycard').first().within(($el) => {
      cy.contains('Baking sees a comeback').click();
    });
    cy.url().should('equal','http://localhost:3000/impact-reports/onward/uccs-grain');
    cy.contains('Colorado’s grain industry continues to rise, thanks to annual seminar.');

  });

  it('should load financials content', function () {
    cy.visit('/impact-reports/onward');
    cy.contains('$455.9 million').click();

    cy.url().should('equal','http://localhost:3000/impact-reports/onward/financials');
    cy.contains('Here\'s how you made a difference in fiscal year 2020.');
    cy.contains('That’s how many people gave to help CU change the world.');

    cy.get('a[href="https://essential.cu.edu/r/index.html?doc=onward2020-pdf"]').should('exist');
  });
});
