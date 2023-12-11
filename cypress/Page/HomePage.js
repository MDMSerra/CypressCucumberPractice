var pageLocators = {
    activeCarouselProduct: '.carousel-indicators > .active', 
    nextCarouselButton: '.carousel-control-next-icon',
    carouselItemsLength: '.carousel-indicators li'
}

class HomePage {
    visitHome(){ cy.visit('/');}
    activeCarouselProduct() { return cy.get(pageLocators.activeCarouselProduct);}
    nextCarouselButtonClick() {return cy.get(pageLocators.nextCarouselButton).click();} 
    newCarouselNotBeEqualToLast(lastElement) {return  cy.get(pageLocators.activeCarouselProduct).should('not.be.equal', lastElement);}
    carouselItemsLength(length){return cy.get(pageLocators.carouselItemsLength).should('have.length.greaterThan', length);}
    

}

export default HomePage;
