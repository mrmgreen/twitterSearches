const chai = require('chai');
const sinon = require('sinon');

const searchController = require('../server/controllers/search');
const mocks = require('../../mocks/search');

describe('Search Controller', () => {
  it('returns search data', () => {
    assert.equal(searchController(req), mocks, 'Search controller did/t return correct mock data');
  });
});
