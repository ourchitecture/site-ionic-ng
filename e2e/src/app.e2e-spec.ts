import { AppPage } from './app.po';

describe('new App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should have title', async() => {
        await page.navigateTo();
        expect(await page.getTitle()).toContain('Welcome to Ourchitecture');
    });
});
