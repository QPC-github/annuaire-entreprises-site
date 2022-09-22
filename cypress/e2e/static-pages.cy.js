const pages = [
  '/',
  '/rechercher?term=kikou',
  '/comment-ca-marche',
  '/faq',
  '/accessibilite',
  '/donnees-extrait-kbis',
  '/vie-privee',
];

pages.forEach((page) => {
  describe(`Page ${page}`, () => {
    it('successfully loads', () => {
      cy.request(page);
    });

    it('FAQ button works', () => {
      cy.visit(page);
      cy.get('.question-bottom-right > a').click();

      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/faq');
    });

    it('Logo button works', () => {
      cy.visit(page);

      cy.get('.fr-header__logo > a').click();

      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/');
    });

    it('"À propos" button works', () => {
      cy.visit(page);

      cy.contains('À propos').click();

      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/comment-ca-marche');
    });
  });
});

describe('Footer navigation', () => {
  it('check all links in footer', () => {
    cy.visit('/');

    cy.get('.fr-footer a').each((footerLink) => {
      cy.request(footerLink.prop('href'));
    });
  });
});