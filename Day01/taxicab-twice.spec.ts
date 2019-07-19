import 'mocha';
import * as assert from 'assert';

import shortestPath from './taxicab';

describe('taxicab', () => {
    it('should be able to do the simple one', () => {
        assert.equal(shortestPath('R2, L3'), 5);
    });

    it('should be able to do the next one', () => {
        assert.equal(shortestPath('R2, R2, R2'), 2);
    });

    it('should be able to do the final one', () => {
        assert.equal(shortestPath('R5, L5, R5, R3'), 12);
    })



});

