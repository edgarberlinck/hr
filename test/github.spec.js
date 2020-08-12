const github = require('../server/github')
const chai = require('chai')
const sinon = require('sinon')

describe('Project Issues List', () => {
  it('should retrieve only opened issues', () => {
    const expectedResponse = {}
    
    const res = {
      send: sinon.spy()
    };
    const aStub = sinon.stub(axios, "get").resolves(Promise.resolve(expectedResponse));

    const req = httpMock.createRequest({method:"get", url:"/GetInfo"});

    info.GetInfo(req, res);

    // At this point, I need to evaluate the response received (which should be expectedResponse)
    assert(res.send.calledWith(expectedResponse)); 

  })
})