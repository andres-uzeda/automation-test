import shows_page from '../../pageObjects/showsPage'

describe('Shows page Test', () => {
    let ShowPage;
    beforeEach(() => {
      ShowPage = new shows_page();
    });

    it('Verify that is possible to search a show', () => {
      ShowPage.navigateToShowsPage();
      ShowPage.enterASearchInput('batman');
      ShowPage.pressSubmitButton();
    });
  });