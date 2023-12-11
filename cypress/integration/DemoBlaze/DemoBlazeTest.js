import {Given, When, Then, Before} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../../Page/HomePage";
const homepage = new HomePage();
//Test the featured items carousel. It should be in a feature including at least 3 scenarios.
let img = [];
context('Home Page Product Store Demo Blaze', () =>{

    describe('Carousel Tests', () => {
        Before(() => {
            cy.fixture("homePage").as("homePage");
        })

        Given('I visit the Product Store DemoBlaze homepage', () =>{
            homepage.visitHome();
        })

        When('I search the carousel image', () => {
            img.add = homepage.activeCarouselProduct();
        })
        
        When('I click on the carousel image control next icon', () => {
            homepage.nextCarouselButtonClick();
        })
        
        Then('The new carousel image should be diferent from the last one', () => {
            homepage.newCarouselNotBeEqualToLast(img);
        })
        
        Then('The object carousel image should have at least {int} elements', (elements) => {
            homepage.carouselItemsLength(elements-1);
            cy.log(elements)
        })

        Then('The object carousel image should be in the fixture {string} atribute', atribute => {
            
            cy.log(atribute)
            // cy.get("@homePage").then( homePage => {
                
            //     homePage.atribute.forEach(element => {
                    
            //         cy.get.activeCarouselProduct().invoke('attr.value', 'src').then( isELement => {
                        
            //             if(isELement){cy.get.activeCarouselProduct().should('have.attr', element)}
            //             else{cy.get.activeCarouselProduct().should('not.have.attr', element)}
            //         })
            //     });
                
            // })
        })

        
        
    })
    
    
})
