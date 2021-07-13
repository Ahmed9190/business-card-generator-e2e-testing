const testData = require("./signin-test-cases.json");

testData.forEach(({ email, password, TCn, expected }) => {
  describe(TCn, () => {
    it("Does not do much!", () => {
      cy.visit("https://business-card-generat0r.herokuapp.com/account/signin");
      if (email) cy.get("input[name=email]").type(email);

      cy.get("input[name=password]").type(password);
      cy.get(".custom-button").click();
      cy.wait(expected == "include" ? 1000 : 3000);
      cy.url().should(expected, "signin");
    });
  });
});
