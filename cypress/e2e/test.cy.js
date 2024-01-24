/// <reference types= "cypress" />

describe('Magento test case ', () => {
  it('test on some items', () => {

    cy.visit('https://magento.softwaretestingboard.com/')

    let mylist=['Women' , 'Gear']
    let randomlist=Math.floor(Math.random()*mylist.length)
    cy.contains(mylist[randomlist]).click()

    let randomitems=Math.floor(Math.random()*4)
    cy.get('.product-items').find('.product-item-info').eq(randomitems).click()

    let randomsize=Math.floor(Math.random()*3)
    let randomcolor=Math.floor(Math.random()*3)
    if(randomlist==0){
      cy.get('.swatch-attribute-options').find('.swatch-option').eq(randomsize).click()
      cy.get('.swatch-attribute.color > .swatch-attribute-options').find('.swatch-option').eq(randomcolor).click()
      cy.get('.stock > span').invoke('text').then((thetext) => {
        if (thetext=='In stock') {
         cy.get('#product-addtocart-button').click()
          
        }
        else {
          alert('sorry this item is not there ')
        }
        
      })

    }
    
    else {
      cy.get('#product-addtocart-button').click()
    }
    
  });
});