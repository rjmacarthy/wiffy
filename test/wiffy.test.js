const assert = require('assert')

const fixtures = require('./fixtures')
const unlock = require('../lib/unlock')
const generate = require('../lib/generate')

describe('wiffy', () => {
  it('can create a new address', () => {
    generate('password')
  })

  it('can unlock address with password', () => {
    const address = unlock(fixtures.encrypted, fixtures.password)
    assert.strictEqual(address.address, fixtures.address)
    assert.strictEqual(address.privateKey, fixtures.privateKey)
    assert.strictEqual(address.wif, fixtures.wif)
  })
})
