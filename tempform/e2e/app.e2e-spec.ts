import { TempformPage } from './app.po';

describe('tempform App', () => {
  let page: TempformPage;

  beforeEach(() => {
    page = new TempformPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
