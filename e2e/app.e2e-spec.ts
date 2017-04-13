import { SampleProjectInAngular4Page } from './app.po';

describe('sample-project-in-angular4 App', () => {
  let page: SampleProjectInAngular4Page;

  beforeEach(() => {
    page = new SampleProjectInAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
