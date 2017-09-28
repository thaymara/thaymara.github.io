import { ThaymaraPage } from './app.po';

describe('thaymara App', () => {
  let page: ThaymaraPage;

  beforeEach(() => {
    page = new ThaymaraPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
