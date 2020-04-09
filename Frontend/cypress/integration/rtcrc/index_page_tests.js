/* eslint-disable no-undef */

describe('index page test cases', () => {

    //Test Status : Passed
    it("Should visit login page", () => {
        cy.visit("http://localhost:3000/");
    })

    //Test Status : Passed
    it("Should hide the logout button on login page", () => {
        cy.contains("side-menu-icon").should("not.be.visible");
    })

    //Test Status : Passed
    it("Should display error on submit button if form is empty", () => {
        cy.get('.btn-primary').click();
    })

    //Test Status : Passed
    it("Should display form field minimum length error", () => {

        cy.get(':nth-child(1) > .error-text')
            .should("not.be.visible");

        cy.get(':nth-child(1) > .form-control')
            .type("123");

        cy.get(':nth-child(2) > .form-control')
            .type("123");

        cy.get(':nth-child(1) > .error-text')
            .should("be.visible")
            .contains("Username must be atleast 6 character.!");
    })

    //Test Status : Passed
    it("Should reset form field values", () => {

        cy.get(':nth-child(1) > .form-control')
            .type("123");

        cy.get(':nth-child(2) > .form-control')
            .type("123");

        cy.get(':nth-child(3) > .btn-regular')
            .click()
    })

    //Test Status : Passed
    it("Should show error if backend failed to respond", () => {

        cy.get(':nth-child(1) > .form-control')
            .type("123123");

        cy.get(':nth-child(2) > .form-control')
            .type("123123");

        cy.get('.btn-primary').click();

        cy.get('.overlay > .popup')
            .should("be.visible")

        cy.get('.content')
            .contains("Internal Server Error Please Contact To Support Team.!");
    })

    //Test Status : Passed
    it("Should show error on wrong user login credential", () => {

        cy.get(':nth-child(1) > .form-control')
            .type("123123");

        cy.get(':nth-child(2) > .form-control')
            .type("123123");

        cy.get('.btn-primary')
            .click();

        cy.get('.overlay > .popup')
            .should("be.visible")

        cy.get('.content')
            .contains("Wrong username or password.!");

    })

    //Test Status : Passed
    it("Should display registration design when clicked on registration link", () => {

        cy.get('u')
            .click();

        cy.get(':nth-child(3) > .form-control')
            .should("be.visible");

        cy.get(':nth-child(4) > .form-control')
            .should("be.visible");
    })

    //Test Status : Passed
    it("Should display login design when clicked on login link", () => {

        //To show registration design
        cy.get('u')
            .click();

        //To switch back to login design
        cy.get('u')
            .click();

        cy.get(':nth-child(1) > .form-control')
            .should("be.visible");

        cy.get(':nth-child(2) > .form-control')
            .should("be.visible");

        cy.get(':nth-child(3) > .form-control')
            .should("not.be.visible");

        cy.get(':nth-child(4) > .form-control')
            .should("not.be.visible");
    })

    //Test Status : Passed
    it("Should registered user on valid form field values" +
        "or display errors according to form field values", () => {

            cy.get('u')
                .click();

            cy.get(':nth-child(1) > .form-control')
                .type("user456");

            cy.get(':nth-child(2) > .form-control')
                .type("123123");

            cy.get(':nth-child(3) > .form-control')
                .should("be.visible")
                .type("123123");

            cy.get(':nth-child(4) > .form-control')
                .should("be.visible")
                .type("zaidpathan339@gmail.com");

            cy.get('.btn-primary')
                .click();

            cy.get('.overlay > .popup')
                .should("be.visible");

            cy.get('.content')
                .contains("User registered successfully.!");
        })

    //Test Status : Passed
    it("Should redirect to home page after successfull login", () => {

        cy.get(':nth-child(1) > .form-control')
            .type("user123");

        cy.get(':nth-child(2) > .form-control')
            .type("123123");

        cy.get('.btn-primary')
            .click()

        cy.url()
            .should('eq', 'http://localhost:3000/home');
    })

})
