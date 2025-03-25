describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
  it('checks if the user can scroll through the slides in the gallery by using the navigation buttons.', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('not.contain', 'Rome');
    cy.get('.swiper-button-prev').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if the description of each slide is displayed correctly.', function () {
    cy.visit('http://localhost:3000');

    const slidesData = [
      { title: 'Rome', description: 'Italy' },
      { title: 'London', description: 'United Kingdom' },
      { title: 'Paris', description: 'France' }
    ];

    cy.get('.swiper-slide').each((slide, index) => {
      cy.wrap(slide).should('contain', slidesData[index].title);
      cy.wrap(slide).should('contain', slidesData[index].description);
    });
  });
});

describe('Swiper Gallery Test', function () {
  const viewports = [
    { device: 'Desktop', width: 1280, height: 800 },
    { device: 'Tablet', width: 768, height: 1024 },
    { device: 'Mobile', width: 375, height: 667 }
  ];

  viewports.forEach(({ device, width, height }) => {
    it(`Checks if the gallery behaves correctly on ${device}`, () => {
      cy.viewport(width, height);
      cy.visit('http://localhost:3000');
      cy.get('.swiper-slide').should('be.visible');

      cy.get('.swiper-button-next').should('be.visible').click();
      cy.get('.swiper-slide-active').should('exist');

      cy.get('.swiper-button-prev').should('be.visible').click();
      cy.get('.swiper-slide-active').should('exist');
    });
  });
});

describe('Swiper Gallery Test', function () {
  it('checks if the gallery is visible', () => {
    cy.visit('http://localhost:3000');

    cy.get('.swiper-container').should('be.visible');

    cy.get('.swiper-slide')
      .should('have.length', 3)
      .each((slide) => {
        cy.wrap(slide).should('be.visible');
      });

    cy.get('.swiper-button-next').should('be.visible').click();
    cy.get('.swiper-button-prev').should('be.visible').click();
  });
});