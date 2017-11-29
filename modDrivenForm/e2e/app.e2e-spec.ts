import { ModDrivenFormPage } from './app.po';

describe('mod-driven-form App', () => {
  let page: ModDrivenFormPage;

  beforeEach(() => {
    page = new ModDrivenFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
