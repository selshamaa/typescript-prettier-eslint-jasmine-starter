import wellcome from '../index'

describe('wellcome', () => {
  it('function should return wellcome msg as string', () => {
    expect(wellcome()).toBe('Hello World')
  })
})
