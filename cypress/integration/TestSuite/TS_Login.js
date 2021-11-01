import LoginPage from "../../support/PageObject/LoginPage";

describe("Test Shopping Login Page", () => {
  beforeEach(() => {
    cy.fixture("valueLogin").then(function (valueLogin) {
      this.testLogin = valueLogin;
      cy.log(this.testLogin);
    });
    cy.visit(
      "http://automationpractice.com/index.php?controller=authentication&back=my-account"
    );
  });

  it("Verify Shopping Login success with valid userID and valid password", function () {
    const login = new LoginPage();
    login.inputEmail(this.testLogin[0].email);
    login.inputPassword(this.testLogin[0].password);
    login.buttonSignIn();
    login.msgLoginSussess();
  });


});
