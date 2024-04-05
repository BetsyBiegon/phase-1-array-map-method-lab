const chai = require('chai');
global.expect = chai.expect;
const fs = require('fs');
const jsdom = require('mocha-jsdom');
const path = require('path');
const babel = require('babel-core');

// Read HTML file
const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8');

// Transpile JavaScript code
const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['env']
  }
);

const src = babelResult.code;

// Set up DOM environment
jsdom({
  html,
  src
});
