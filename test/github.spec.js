const chai = require('chai')
const {calculateRepositoryStatistics} = require('../logic/dataHandling')

const { expect } = chai

describe('Statistics Grid Data Generation', () => {
  // it('Should return all properties as zero if no issues are found', () => {
  //   const gridData = calculateRepositoryStatistics([])
    
  //   expect(gridData).has.own.property('totalOpenedIssues').which.is.equals(0)
  //   expect(gridData).has.own.property('avg').which.is.equals(0)
  //   expect(gridData).has.own.property('stdDev').which.is.equals(0)
  // })
  
  it('Should calculate the correct avg ad total if some data is returned', () => {
    const fakeApiReturn = [
      {state: 'open', created_at: '2020-08-11T00:00:00Z'},
      {state: 'open', created_at: '2020-08-11T00:00:00Z'},
      {state: 'open', created_at: '2020-08-11T00:00:00Z'}
    ]
     
    const gridData = calculateRepositoryStatistics(fakeApiReturn)

    expect(gridData).has.own.property('totalOpenedIssues').which.is.equals(3)
    expect(gridData).has.own.property('avg').which.is.equals(1)
    expect(gridData).has.own.property('stdDev').which.is.equals(0)
  })

  it('Should calculate the correct stddev if some data is returned', () => {
    const fakeApiReturn = [
      {state: 'open', created_at: '2020-08-11T00:00:00Z'},
      {state: 'open', created_at: '2020-08-12T00:00:00Z'},
      {state: 'open', created_at: '2020-08-13T00:00:00Z'}
    ]
     
    const gridData = calculateRepositoryStatistics(fakeApiReturn)

    expect(gridData).has.own.property('stdDev').which.is.equals(2)
  })
})