const assert = require('assert')

const fixtures = require('./fixtures')
const unlock = require('../lib/unlock')
const generate = require('../lib/generate')

describe('wiffy', () => {
  it('can create a new wallet', () => {
    generate('password')
  })

  it('can unlock wallet with password', () => {
    const wallet = unlock(fixtures.encrypted, fixtures.password)
    assert.strictEqual(wallet.address, fixtures.address)
    assert.strictEqual(wallet.privateKey, fixtures.privateKey)
    assert.strictEqual(wallet.wif, fixtures.wif)
  })
})
