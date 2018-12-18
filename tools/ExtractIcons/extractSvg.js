require('babel-core/register')();
require('babel-polyfill');

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

const cheerio = require('cheerio');
const prettier = require('prettier');
const SVGO = require('svgo');

const config = require('./config.js');

const pathBase = process.env.PATH_SVG || `${__dirname}/IconDrop`;

const finalObject = {};

const getOneFile = path => fs.readFileAsync(path, 'utf8');

const toCamelCase = str => {
  const s = str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
    .join('');
  return s.slice(0, 1).toLowerCase() + s.slice(1);
};

async function optimiseSvg(svg, pathToFile) {
  const svgo = new SVGO(config.svgo);
  const optimised = await svgo.optimize(svg, { path: pathToFile });
  return optimised.data;
}

const prettifyCode = codeIn => prettier.format(codeIn, config.prettier);

const makeSingleQuotesPairsParentheses = codeIn => codeIn.replace(/'(.*?)'/g, '($1)');

const formatCode = objectIn => {
  const importStatements = `
  import React from "react";
  /* eslint-disable */`;

  const exportObjectString = `
  export default Object.assign(${JSON.stringify(objectIn)});`;
  const prettyExportObjectString = prettifyCode(exportObjectString);

  const noQuotes = makeSingleQuotesPairsParentheses(prettyExportObjectString);

  return `
  ${importStatements}
  ${prettifyCode(noQuotes)}`;
};

(async () => {
  const files = await fs.readdirAsync(pathBase);

  files.forEach(async (file, i) => {
    const filePath = `${pathBase}/${file}`;
    const svgFile = await getOneFile(filePath);
    const optimisedSvg = await optimiseSvg(svgFile, filePath);

    const $ = cheerio.load(optimisedSvg);
    const svg = $('svg');
    const svgChildren = svg.children();

    let resultData = svg.html();
    if (svgChildren.length > 1) {
      resultData = `<g>${resultData}</g>`;
    }

    const fileName = toCamelCase(file.slice(0, -4));

    finalObject[fileName] = resultData;

    if (i === files.length - 1) {
      const finalString = formatCode(finalObject);

      fs.writeFile(`${__dirname}/../../src/components/Icon/paths.js`, prettifyCode(finalString), err => {
        if (err) throw err;
        console.log('Ba-zing! 🍕 done!');
      });
    }
  });
})();
