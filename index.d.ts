interface Wallet {
  address: string
  encrypted: {
    privateKey: string
    compressed: boolean
  }
}

declare module "wiffy" {
  export function generate(password: string): Wallet
  export function unlock(encrypted: string, password: string): Wallet
}

