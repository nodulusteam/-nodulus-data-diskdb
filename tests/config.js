// tests/config.js
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai

process.env.CONFIG_PATH = "./tests/config";

describe('config', function () {
  it('config.appSettings should return the configuration', function () {
   var dbplugin = require('../diskdb');
    console.log(dbplugin);
    expect(dbplugin).to.not.equal(null);
  });
});