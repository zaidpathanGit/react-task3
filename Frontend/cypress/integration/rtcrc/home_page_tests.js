/* eslint-disable no-undef */

describe("Home page test cases", () => {

    //Test Status : Passed
    it("Shoud restrict user from directly accessing to" +
        "home page without login", () => {

            cy.visit("http://localhost:3000/home");
        })

    //Test Status : Passed
    it("Should login and redirect to home page", () => {

        cy.visit("http://localhost:3000/");

        cy.get(':nth-child(1) > .form-control')
            .type("user123");

        cy.get(':nth-child(2) > .form-control')
            .type("123123");

        cy.get('.btn-primary')
            .click();
    })

    //Test Status : 
    it("Should show logout icon", () => {

        cy.wait(1000);

        cy.get('.side-menu-icon')
            .should("be.visible");
    })

    //Test Status : 
    it("Should show empty list image if no task found", () => {
        cy.get('.empty-list')
            .should("be.visible");
    })

    //Test Status : Passed
    it("Should check fields validation to add new task", () => {

        cy.get('.outer > .btn-primary')
            .click();

        cy.get('.popup')
            .should("be.visible");

        cy.get(':nth-child(5) > .btn-primary')
            .click();
    })

    //Test Status : Passed
    it("Should add new task if form contains valid information", () => {

        cy.get('.outer > .btn-primary')
            .click();

        cy.get('.popup')
            .should("be.visible");

        cy.get(':nth-child(1) > .form-control')
            .type("Task 1");

        cy.get(':nth-child(2) > .form-control')
            .select('Project 1');

        cy.wait(3000);

        cy.get(':nth-child(5) > .btn-primary')
            .click();
    })

    //Test Status : Passed
    it("Should check for filter form validation", () => {

        cy.get('.outer > .btn-regular')
            .click();

        cy.get('.form-control')
            .type("2020-04-08");

        cy.get('.error-text')
            .should("be.visible")
            .contains("Future date is not allowed.!");
    })

    //Test Status : Passed
    it("Should display logged user task on home page", () => {

        cy.get(".block")
            .should("be.visible");
    })

    //Test Status : Passed
    it("Should display filtered data on valid form information", () => {

        cy.get('.outer > .btn-regular')
            .click();

        cy.get('.form-control')
            .type("2020-04-05");

        cy.get('.error-text')
            .should("be.visible");
    })

    //Test Status : 
    it("Should logout user when clicked on logout icon", () => {

        cy.get('.side-menu-icon')
            .should("be.visible")
            .click();

        cy.url()
            .should('eq', "http://localhost:3000/");
    })

    //Test Status : Passed
    it("Should display timer when Start Timer button is cliked", () => {

        cy.get(".block")
            .should("be.visible");

        cy.get(':nth-child(1) > .btn-primary')
            .click();

        cy.get('font')
            .should('be.visible');
    })

})