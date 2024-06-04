import { describe, test, expect } from 'vitest';

describe('first unity test', () => {
    test('shold be equal 201', () => {
        const result = 201

        expect(result).toEqual(201)
    })
})