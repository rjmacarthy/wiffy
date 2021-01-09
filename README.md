# wiffy

A bip38 Bitcoin paper wallet utility.

Create a wallet:

```
console.log(create('password'))

{
  address: '1KTcgVzPLqjZqgVPUmiCMZujwGzyySVDrt',
  encrypted: '6PYWiuqUWqTUyYn8pgudWrrjMkG29PWkvq12M7c9sG13mvbm6HQQFyJEjn'
}

```

Decypt a wallet:

```
console.log(decrypt('6PYWiuqUWqTUyYn8pgudWrrjMkG29PWkvq12M7c9sG13mvbm6HQQFyJEjn', 'password'))

{
  address: '1KTcgVzPLqjZqgVPUmiCMZujwGzyySVDrt',
  privateKey: '89a961dc33a8bc1e9d92fcc33e18cca9d5b40bb6bc386a141172bce56658791c'
  wif: 'L1VvbGvYwpkYGuxc4ru9YwQuvKHo8FRkWo1AcaYCXDNNS8BVcPdk'
}

```
