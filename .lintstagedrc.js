const path = require('path');

const buildSolhintCommand = (filenames) =>
  `solhint ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')} `;

const buildLintCommand = (filenames) =>
  `eslint ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

const buildPrettierCommand = (filenames) =>
  `prettier --check ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')} `;

module.exports = {
  '**/*.sol': [buildSolhintCommand],
  '**/*.{html,js,jsx}': [buildLintCommand],
  '**/*.{js,jsx,sol}': [buildPrettierCommand],
};

module.exports = {
  '**/*.{js,jsx,ts,tsx}': [buildLintCommand],
  '**/*.{js,jsx,ts,tsx,sol,json}': [buildPrettierCommand],
  '**/*.sol': [buildSolhintCommand],
};
