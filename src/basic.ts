// import env from '@internal/isomorphic'; // Importing the module directly has no issue.
import env from '@internal/normal'; // Importing the module through a facade ignores the `resolve` condition.

export const env = env;
