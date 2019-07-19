import 'mocha';
import * as assert from 'assert';

import findTwice from './taxicab-twice';

describe('findTwice', () => {
    it('should be able to do the example', () => {
        assert.equal(findTwice('R8, R4, R4, R8'), 4);
    });



});

