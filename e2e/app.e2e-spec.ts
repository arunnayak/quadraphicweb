import { QuadraphicPage } from './app.po';

describe('quadraphic App', () => {
  let page: QuadraphicPage;

  beforeEach(() => {
    page = new QuadraphicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
