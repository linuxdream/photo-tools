# base-js-template
To be used as a template for JS/TS projects. It can be used for both front-end and Node-based applications (see comment in tsconfig.json for FE apps). Please keep in mind that if you need to use an init script for your particular app, then obviously can't use this base repo. However, you can most certainly _should_ use the config files here as these will be the Trevor Engineering standard! 

This repo has a number of nice things baked into it:
1. Linting - ESLint and Prettier baked into npm scripts. Please enable both eslint, prettier, and auto-formatting on save in your code editor.
2. Husky - GitHub hooks manager. Hooks and associated scripts can be found in the `.husky` directory. There is currently a pre-commit hook already installed that runs `lint-staged`.
3. Typescript - Typescript is baked in and integrated with ESLint. `npm run build` will build your TS project into the `dist` directory.
4. Jest - Jest testing is baked in. Jest tests should be written _next to_ the file being tested. No dedicated `tests` directory. Tests can be run with `npm run test`.
5. GitHub Actions - The Actions are setup to run lint and test checks on PRs with GitHub automatically. You will need to setup branch protection rules to block PRs if checks fail.

## Before Use
Before using this repo, be sure to:
 - Review the `package.json` scripts and update any based on your application. Try not to change the default key names of common items like `test` or `build` as those are baked into GitHub Actions.
 - Review the `.github/workflows/main.yml` file to be sure any linting, tests, and build commands are correct for your application. Add any additional steps as necessary.
 - Review the `.github/pull_request_template` and update any commands or instructions as necessary. Most of the information there is sample text to be overwritten on PR with relevant instructions but it might be helpful to add info relevant to your implementation.


# Running your Service
This template comes packaged with a `start` and `watch-and-run` NPM script.

`npm start` - TSC compile and run the index.js file in non-watch mode.
`npm run watch-and-run` - TSC compile and run your index.js in watch mode which will recompile and restart the server on file changes.