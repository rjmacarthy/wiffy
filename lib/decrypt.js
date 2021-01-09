const bitcore = require('bitcore-lib')
const bip38 = require('bip38')
const wif = require('wif')

const decrypt = (key, password) => {
  const decrypted = bip38.decrypt(key, password)
  const decryptedWif = wif.encode(
    0x80,
    decrypted.privateKey,
    decrypted.compressed,
  )
  var privateKey = new bitcore.PrivateKey(decryptedWif)

  return {
    address: privateKey.toAddress().toString(),
    privateKey: privateKey.toString(),
  }
}

module.exports = decrypt
