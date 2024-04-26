# wiffy

A bip38 Bitcoin paper wallet utility. The safest way to store your Bitcoin in cold storage!

**Create Wallet**

Create a new Bitcoin wallet with a randomly generated key pair:

The output will include the wallet's address and encrypted private key.


```
create('password')
{
  address: '1KTcgVzPLqjZqgVPUmiCMZujwGzyySVDrt',
  encrypted: '6PYWiuqUWqTUyYn8pgudWrrjMkG29PWkvq12M7c9sG13mvbm6HQQFyJEjn'
}
```

**Decypt a wallet:**

The output will include the wallet's address, private key and WIF string.

```
decrypt('6PYWiuqUWqTUyYn8pgudWrrjMkG29PWkvq12M7c9sG13mvbm6HQQFyJEjn', 'password')
{
  address: '1KTcgVzPLqjZqgVPUmiCMZujwGzyySVDrt',
  privateKey: '89a961dc33a8bc1e9d92fcc33e18cca9d5b40bb6bc386a141172bce56658791c'
  wif: 'L1VvbGvYwpkYGuxc4ru9YwQuvKHo8FRkWo1AcaYCXDNNS8BVcPdk'
}
```
