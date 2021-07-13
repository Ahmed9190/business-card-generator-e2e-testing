const testData = require("./signup-test-cases.json");

testData.forEach(({ email, password, TCn, expected, fname, lname }) => {
  describe(TCn, () => {
    it("Does not do much!", () => {
      cy.visit("https://business-card-generat0r.herokuapp.com/account/signup");
      if (fname) cy.get("input[name=f_name]").type(fname);
      if (lname) cy.get("input[name=l_name]").type(lname);
      if (email) cy.get("input[name=email]").type(email);
      if (password) cy.get("input[name=password]").type(password);
      cy.get(".custom-button").click();
      cy.wait(expected == "include" ? 1000 : 3000);
      cy.url().should(expected, "signup");
    });
  });
});
