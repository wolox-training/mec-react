import getData from '.';

describe('02 - async', () => {
  it('getData resolves the data if true is sent as argument (use async/await)', async () => {
    getData();
  });
  it('getData resolves the data if true is sent as argument (avoid async/await)', () => {
  });
  it('getData throws error if false is sent as argument (use async/await)', async () => {
  });
  it('getData throws error if false is sent as argument (avoid async/await)', () => {
  });
});
