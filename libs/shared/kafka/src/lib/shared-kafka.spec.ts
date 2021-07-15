import { sharedKafka } from './shared-kafka';

describe('sharedKafka', () => {
  it('should work', () => {
    expect(sharedKafka()).toEqual('shared-kafka');
  });
});
