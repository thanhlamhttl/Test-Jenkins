class LoginPage {
  inputEmail(email) {
    //get email to email address field
    cy.get('input[id="email"]').clear().type(email);
    return this;
  }

  inputPassword(password) {
    //get password to password field
    cy.get('input[id="passwd"]').clear().type(password);
    return this;
  }

  buttonSignIn() {
    //click button Sing in
    cy.get('i[class="icon-lock left"]').click();
  }
  msgLoginSussess() {
    //show message when login successful
    cy.get('p[class="info-account"]').should(
      "have.text",
      "Welcome to your account. Here you can manage all of your personal information and orders.".trim()
    );
  }

  msgError1() {
    //show message when blank email and password
    cy.xpath('//li[text()="An email address required."]').should(
      "have.text","An email address required.");
  }

  msgError2() {
    //show message when input not format email
    cy.xpath('//li[text()="Invalid email address."]').should(
      "have.text", "Invalid email address."
    );
  }

  msgError3() {
    //show message when input invalid email and invalid password
    cy.xpath('//li[text()="Authentication failed."]').should(
      "have.text", "Authentication failed.");
  }

  clickForgotPassword() {
      //user click forgot password
      cy.get("a[href='http://automationpractice.com/index.php?controller=password']").click();
  }

  buttonRetrivePass(){
    //click button retrive password
    cy.xpath("//span[text()='Retrieve Password']").click();
  }

  msgRetrievePassSuccess(){ 
    //show message when retrive password is successful 
    cy.get("p[class='alert alert-success']");
  }

  msgError4(){
    //show message when input invalid email
    cy.xpath("//div[@class='alert alert-danger']").contains("There is no account registered for this email address.");
  }
  clickSignOut(){
    //ckick log out account
    cy.get('a[class="logout"]').click();
  }
}
export default LoginPage;
