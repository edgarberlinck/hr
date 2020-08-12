const { repository } = require('../logic')
const chai = require('chai')

const { expect, assert } = chai

describe('Repository URL parsing', () => {
  it('Should return the repository path if a valid guthub project is provided', () => {
    expect(repository.resolveProjectNameByURL('https://github.com/edgarberlinck/react-demos'))
      .be.equal('/edgarberlinck/react-demos')
  })

  it('Should throw if a non-github URL is provided', () => {
    assert.throws(() => repository.resolveProjectNameByURL('https://bitbucket.com/an/invalid/project'), Error)   
  })
})