class LoginTravelPage
{
    inputEmail(email){
        //get input email to email field
        cy.get("input[type='text']").clear().type(email);
        return this;
    }

    inputPassword(password){
      //get input password to password field
      cy.get("input[type='password']").clear().type(password);
      return this;
    }

    buttonLogin(){
        //click login button
        cy.get("[type = 'submit']").click();
    }

    showMessageInputNotFormat(){
        //show message when with input character
        cy.xpath("//p[text() = 'The Email field must contain a valid email address.']")
        .should("have.text", "The Email field must contain a valid email address.");
    }

    showMessageSuccess(){
        //show message when login success
        cy.xpath("//p[text() = 'DASHBOARD']").should("have.text", "DASHBOARD".trim());
    }
    showMessageInputInvalid(){
        //show message when input invalid email and password
        cy.xpath("//div[text() = 'Invalid Login Credentials']")
        .should("have.text", "Invalid Login Credentials".trim());
    }
}
export default LoginTravelPage;