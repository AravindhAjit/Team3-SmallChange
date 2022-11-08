export class Home{

    clickPortfolioTab(){
        cy.get('app-nav-bar div.navbar app-nav-bar-link a').contains('Portfolio').click();
    }


    clickActivityTab(){
        cy.get('app-nav-bar div.navbar app-nav-bar-link a').contains('Activity').click();
    }

    clickPreferencesTab(){
        cy.get('app-nav-bar div.navbar app-nav-bar-link a').contains('Preferences').click();
    }

    clickTradeTab(){
        cy.get('app-nav-bar div.navbar app-nav-bar-link a').contains('Trade').click();
    }
    
}