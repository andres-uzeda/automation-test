class ShowsPage {
    constructor(){
        this.pageURL = 'http://localhost:3000/shows';
        this.searchInput = '[name="search"]';
        this.submitButton = '[type="submit"]';
    }

    navigateToShowsPage(){
        return cy.visit(this.pageURL);
    }
    enterASearchInput(showName){
        return cy.get(this.searchInput).type(showName);
    }
    pressSubmitButton(){
        return cy.get(this.submitButton).click();
    }
}
export default ShowsPage