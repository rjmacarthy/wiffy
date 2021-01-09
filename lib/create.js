const bitcore = require('bitcore-lib')
const bip38 = require('bip38')
const wif = require('wif')

const create = password => {
  const privateKey = new bitcore.PrivateKey()
  const address = privateKey.toAddress()
  var decoded = wif.decode(privateKey.toWIF())
  const encrypted = (encryptedKey = bip38.encrypt(
    decoded.privateKey,
    decoded.compressed,
    password,
  ))

  return {
    address: address.toString(),
    encrypted,
  }
}

module.exports = create
