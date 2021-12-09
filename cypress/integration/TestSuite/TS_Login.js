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

  it("Verify Shopping Login success with valid email and valid password", function () {
    //input valid email and password
    const login = new LoginPage();
    login.inputEmail(this.testLogin[0].email);
    login.inputPassword(this.testLogin[0].password);
    login.buttonSignIn();
    login.msgLoginSussess();
  });

  it("Verify Shopping Login fail with invalid email and invalid password", function () {
    //input invalid email and invalid password
    const login = new LoginPage();
    login.inputEmail(this.testLogin[1].email);
    login.inputPassword(this.testLogin[1].password);
    login.buttonSignIn();
    login.msgError3();
  });

  it("Verify Shopping Login fail with blank data", function () {
    //input blank email and blank password
    const login = new LoginPage();
    cy.get('input[id="email"]').should("have.value", '');
    cy.get('input[id="passwd"]').should("have.value", '');
    login.buttonSignIn();
    login.msgError1();
  });
  it("Verify Shopping Login fail with not format email", function () {
    //input not format email
    const login = new LoginPage();
    login.inputEmail(this.testLogin[2].email);
    login.inputPassword(this.testLogin[0].password);
    login.buttonSignIn();
    login.msgError2();
  });

  it("Verify Shopping Login fail with input number email", function () {
    //input number email field
    const login = new LoginPage();
    login.inputEmail(this.testLogin[3].email);
    login.inputPassword(this.testLogin[0].password);
    login.buttonSignIn();
    login.msgError2();
  });

  it("Verify Shopping Login fail with input space email", function () {
    //input space email field
    const login = new LoginPage();
    login.inputEmail(this.testLogin[4].email);
    login.inputPassword(this.testLogin[0].password);
    login.buttonSignIn();
    login.msgError2();
  });

  it("Verify user retrieved password success with input valid email", function () {
    //user forgot and retrive password with valid email
    const login = new LoginPage();
    login.inputEmail(this.testLogin[0].email);
    login.clickForgotPassword();
    login.inputEmail(this.testLogin[0].email);
    login.buttonRetrivePass();
    login.msgRetrievePassSuccess();
    login.msgRetrievePassSuccess();
    cy.should(
      "have.text",
      "A confirmation email has been sent to your address: " +
        this.testLogin[0].email
    );
  });

  it("Verify user retrieved password fail with input invalid email", function () {
    //user forgot and retrive password fail with invalid email
    const login = new LoginPage();
    login.clickForgotPassword();
    login.inputEmail(this.testLogin[1].email);
    login.buttonRetrivePass();
    login.msgError4();
  });

  it("Verify user retrieved password fail with blank email", function () {
    //user forgot and retrive password fail with blank email
    const login = new LoginPage();
    login.clickForgotPassword();
    cy.get('input[id="email"]').should("have.value", "");
    login.buttonRetrivePass();
    login.msgError2();
  });
});
