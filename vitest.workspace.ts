import { defineWorkspace } from 'vitest/config';
export default defineWorkspace([
  {
    test: {
      name: 'server',
      include: ['test/**/server.test.ts'],
    },
  },
  {
    resolve: { conditions: ['browser'] },
    test: {
      name: 'browser',
      include: ['test/**/browser.test.ts'],
    },
  },
]);
