# wiffy

A bip38 Bitcoin paper wallet utility. The safest way to store your Bitcoin in cold storage!

**Install**

```
npm i wiffy
```

**Usage**

```
import wiffy from 'wiffy'

const password = 'test'
const { address, encrypted } = wiffy.generate(password)
const { privateKey, wif, address } = wiffy.unlock(encrypted, password)
```

**API**

`generate`	Generates a new Bitcoin wallet.

```
{
  address: '1KTcgVzPLqjZqgVPUmiCMZujwGzyySVDrt',
  encrypted: '6PYWiuqUWqTUyYn8pgudWrrjMkG29PWkvq12M7c9sG13mvbm6HQQFyJEjn'
}
```

`unlock`	Unlocks an existing wallet using the provided encrypted private key and password.

```
{
  address: '1KTcgVzPLqjZqgVPUmiCMZujwGzyySVDrt',
  privateKey: '89a961dc33a8bc1e9d92fcc33e18cca9d5b40bb6bc386a141172bce56658791c'
  wif: 'L1VvbGvYwpkYGuxc4ru9YwQuvKHo8FRkWo1AcaYCXDNNS8BVcPdk'
}
```