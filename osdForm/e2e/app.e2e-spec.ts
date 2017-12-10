import { OsdFormPage } from './app.po';

describe('osd-form App', () => {
  let page: OsdFormPage;

  beforeEach(() => {
    page = new OsdFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
