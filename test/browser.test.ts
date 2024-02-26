import { expect, test } from 'vitest';
import { env } from '../src/basic.js';

test('is browser code', () => {
  expect(env).equals('browser');
});
