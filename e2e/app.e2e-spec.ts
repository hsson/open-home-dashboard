import { OpenHomeDashboardPage } from './app.po';

describe('open-home-dashboard App', function() {
  let page: OpenHomeDashboardPage;

  beforeEach(() => {
    page = new OpenHomeDashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
