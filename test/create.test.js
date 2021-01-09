const assert = require('assert')

const fixtures = require('./fixtures')
const create = require('../lib/create')
const decrypt = require('../lib/decrypt')

describe('wiffy', () => {
  it('can create encryped key', () => {
    create('password')
  })

  it('can decrypt encrypted key', () => {
    const decrypted = decrypt(fixtures.encrypted, fixtures.password)
    assert.strictEqual(decrypted.address, fixtures.address)
    assert.strictEqual(decrypted.privateKey, fixtures.privateKey)
  })
})
