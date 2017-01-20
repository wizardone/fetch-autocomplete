import FetchException from '../src/fetch_exception'
import { expect } from 'chai'

describe('FetchException', () => {
  let exception;
  before(() => {
    exception = new FetchException("JSON response must have a 'data' key in it. Please refer to the README")
  })
  it('assigns the name of the class', () => {
    expect(exception.name).to.eql('FetchException')
  })

  it('returns the error message', () => {
    expect(exception.message).to.eql("JSON response must have a 'data' key in it. Please refer to the README")
  })
})
