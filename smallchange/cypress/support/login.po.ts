export class Login{

    navigate(){
        cy.visit('/');
    }

    enterUsername(){
        cy.get('app-username-form-control app-text-box-standard input').type('admin');
    }

    enterPassword(){
        cy.get('app-password-form-control app-text-box-password input').type('admin');

    }

    clickLoginButton(){
        cy.get('button').click();
    }


}