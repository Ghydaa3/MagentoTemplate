/// <reference types= "cypress" />

Cypress.Commands.add("toAllText", () => {
  let randomitems = Math.floor(Math.random() * 4);
  cy.get(".product-items").find(".product-item-info").eq(randomitems).click();
  let randomsize = Math.floor(Math.random() * 3);

  cy.get(".swatch-attribute-options")
    .find(".swatch-option")
    .eq(randomsize)
    .click();
  let randomcolor = Math.floor(Math.random() * 3);

  cy.get(".swatch-attribute.color > .swatch-attribute-options")
    .find(".swatch-option")
    .eq(randomcolor)
    .click();
  cy.get(".stock > span")
    .invoke("text")
    .then((thetext) => {
      if (thetext == "In stock") {
        cy.get("#product-addtocart-button").click();
      } else {
        alert("sorry this item is not there ");
      }

      cy.wait(5000);
    });
});

describe("Magento test case ", () => {
  it("add random item from Women category", () => {
    cy.visit("https://magento.softwaretestingboard.com/");

    cy.get("#ui-id-4").click();

    cy.toAllText();

    cy.wait(5000);
  });

  it("add random item from Men category", () => {
    cy.visit("https://magento.softwaretestingboard.com/");

    cy.get("#ui-id-5").click();

    cy.toAllText();

    cy.wait(5000);
  });

  it("add random item from Gear category", () => {
    cy.visit("https://magento.softwaretestingboard.com/");

    cy.get("#ui-id-6").click();
    let randomitems = Math.floor(Math.random() * 4);
    cy.get(".product-items").find(".product-item-info").eq(randomitems).click();

    cy.get("#product-addtocart-button").click();

    cy.wait(5000);
  });
});


describe('Login Test Case', () => {
  it('Login with correct username and correct password ', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9hZmZpcm0td2F0ZXItYm90dGxlLmh0bWw%2C/')

    cy.get('#email').type('ghydaa7@gmail.com')
    cy.get('#pass').type('Ghydaa1999')
    cy.get('#send2').click()
    
  });
});
