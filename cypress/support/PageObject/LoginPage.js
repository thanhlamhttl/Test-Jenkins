class LoginPage
{
    inputEmail(email){
        cy.get('input[id="email"]').clear().type(email);
        return this
    }

    inputPassword(password){
        cy.get('input[id="passwd"]').clear().type(password);
        return this
    }

    buttonSignIn(){
        cy.get('i[class="icon-lock left"]').click();
    }
    msgLoginSussess(){
        cy.get('p[class="info-account"]').should(
          "have.text",
          "Welcome to your account. Here you can manage all of your personal information and orders.".trim());
    }
}
export default LoginPage;