import { AppPage } from './app.po';

describe('new App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should have title', () => {
        page.navigateTo();
        expect(page.getTitle()).toContain('Welcome to Ourchitecture');
    });
});
