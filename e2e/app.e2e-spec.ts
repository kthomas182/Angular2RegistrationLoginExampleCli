import { Angular2RegistrationLoginExampleCliPage } from './app.po';

describe('angular2-registration-login-example-cli App', () => {
  let page: Angular2RegistrationLoginExampleCliPage;

  beforeEach(() => {
    page = new Angular2RegistrationLoginExampleCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
