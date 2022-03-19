import * as fromSession from './session.actions';

describe('ySessions', () => {
  it('should return an action', () => {
    expect(fromSession.ySessions().type).toBe('[Session] Y Sessions');
  });
});
