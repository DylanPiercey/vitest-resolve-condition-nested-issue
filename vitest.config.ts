/// <reference types="vitest" />

import { defineConfig } from 'vite';

export default defineConfig({
  // resolve: { conditions: ["browser"] }, // this is honored, but not in the workspace config.
  test: {},
});
