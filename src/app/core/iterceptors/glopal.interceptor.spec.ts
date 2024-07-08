import { TestBed } from '@angular/core/testing';

import { GlopalInterceptor } from './glopal.interceptor';

describe('GlopalInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GlopalInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GlopalInterceptor = TestBed.inject(GlopalInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
