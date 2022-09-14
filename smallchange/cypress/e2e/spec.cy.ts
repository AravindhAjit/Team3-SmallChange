import { Home } from "cypress/support/home.po";
import { Login } from "cypress/support/login.po";

let login: Login;
let home: Home;

describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
  });

  it('should enter credentials and redirect to the home page',()=>{

    //navigate();
  })
})
