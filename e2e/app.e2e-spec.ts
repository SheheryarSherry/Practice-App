import { AngularProPage } from './app.po';

describe('angular-pro App', function() {
  let page: AngularProPage;

  beforeEach(() => {
    page = new AngularProPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
