import { expect, test } from 'vitest';
import { env } from '../src/basic.js';

test('is server code', () => {
  expect(env).equals('server');
});
