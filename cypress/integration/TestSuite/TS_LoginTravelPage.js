import LoginTravelPage from "../../support/PageObject/LoginTravelPage";

describe("Testing Login Travel Page", () => {
  beforeEach(() => {
    cy.fixture("valueLogin").then(function (valueLogin) {
      this.testLogin = valueLogin;
      cy.log(this.testLogin);
    });
    cy.visit("https://phptravels.net/api/admin");
  });
  it("Verify login successful when valid email and valid password", function () {
    //login successful
    const login = new LoginTravelPage();
    login.inputEmail(this.testLogin[0].email);
    login.inputPassword(this.testLogin[0].password);
    login.buttonLogin();
    login.showMessageSuccess();
  });

  it("Verify login successful when input character email field", function () {
    //login successful
    const login = new LoginTravelPage();
    login.inputEmail(this.testLogin[1].email);
    login.inputPassword(this.testLogin[1].password);
    login.buttonLogin();
    login.showMessageInputInvalid();
  });

  it("Verify login successful when input not format email", function () {
    //login successful
    const login = new LoginTravelPage();
    login.inputEmail(this.testLogin[2].email);
    login.inputPassword(this.testLogin[1].password);
    login.buttonLogin();
    login.showMessageInputNotFormat();
  });
})