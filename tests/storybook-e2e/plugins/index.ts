/// <reference types="cypress" />
/* eslint-disable arrow-body-style */
// https://docs.cypress.io/guides/guides/plugins-guide.html

/**
 * @type {Cypress.PluginConfig}
 */
// @ts-ignore
export default function config(on, config) {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  return Object.assign({}, config, {
    fixturesFolder: 'tests/storybook-e2e/fixtures',
    integrationFolder: 'tests/storybook-e2e/specs',
    screenshotsFolder: 'results/screenshots',
    videosFolder: 'results/videos',
    supportFile: 'tests/storybook-e2e/support/index.ts'
  });
}
