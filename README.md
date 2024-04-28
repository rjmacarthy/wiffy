# wiffy

A bip38 Bitcoin paper wallet utility. The safest way to store your Bitcoin in cold storage!

**Generate Wallet**

Create a new Bitcoin wallet with a randomly generated key pair:

The output will include the wallet's address and encrypted private key.

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