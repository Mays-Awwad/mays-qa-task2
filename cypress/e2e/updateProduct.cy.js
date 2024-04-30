//<reference type="cypress" />

describe("search for product functionality", () => {
    before( ()=> {
        cy.Login();
    })

    it("search for product", ()=> {
        cy.get("#nopSideBarPusher").click();
        cy.get("a.nav-link").contains("Catalog").click({force:true});
        cy.contains("P","Products").click({force:true});
        cy.wait(1000);

    });

});