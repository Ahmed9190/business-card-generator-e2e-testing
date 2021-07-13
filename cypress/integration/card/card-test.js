const testData = require("./card-test-cases.json");

testData.forEach(
  ({
    TCn,
    f_name,
    l_name,
    position,
    address,
    email,
    website,
    phone_num,
    fb,
    insta,
    compnay_name,
    password,
    expected,
  }) => {
    describe(TCn, () => {
      it("Does not do much!", () => {
        cy.visit(
          "https://business-card-generat0r.herokuapp.com/account/signin"
        );
        if (email) cy.get("input[name=email]").type(email);
        if (password) cy.get("input[name=password]").type(password);

        cy.get(".custom-button").click();
        cy.wait(2000);
        cy.get(".create-one-button").click();
        cy.wait(2000);

        if (f_name) cy.get("input[name=f_name]").type(f_name);
        if (l_name) cy.get("input[name=l_name]").type(l_name);
        if (position) cy.get("input[name=position]").type(position);
        if (address) cy.get("input[name=address]").type(address);
        if (email) cy.get("input[name=email]").type(email);
        if (website) cy.get("input[name=website]").type(website);
        if (phone_num) cy.get("input[name=phone_num]").type(phone_num);
        if (fb) cy.get("input[name=fb]").type(fb);
        if (insta) cy.get("input[name=insta]").type(insta);
        if (compnay_name) cy.get("input[name=compnay_name]").type(compnay_name);

        cy.get("button").eq(1).click();
        cy.wait(expected == "include" ? 1000 : 5000);
        cy.url().should(expected, "card");
      });
    });
  }
);
