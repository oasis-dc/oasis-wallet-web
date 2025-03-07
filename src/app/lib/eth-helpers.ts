import * as oasis from '@oasisprotocol/client'
import * as oasisRT from '@oasisprotocol/client-rt'
import { bytesToHex, isValidPrivate, privateToAddress, toChecksumAddress } from '@ethereumjs/util'
import { hex2uint } from './helpers'
export { isValidAddress as isValidEthAddress, stripHexPrefix } from '@ethereumjs/util'

export const isValidEthPrivateKey = (ethPrivateKey: string): boolean => {
  try {
    return isValidPrivate(hex2uint(ethPrivateKey))
  } catch {
    return false
  }
}
export const isValidEthPrivateKeyLength = (ethPrivateKey: string) => ethPrivateKey.length === 64
export const privateToEthAddress = (ethPrivateKey: string): string =>
  toChecksumAddress(bytesToHex(privateToAddress(hex2uint(ethPrivateKey))))

export async function getEvmBech32Address(evmAddress: string) {
  const evmBytes = oasis.misc.fromHex(evmAddress.replace('0x', ''))
  const address = await oasis.address.fromData(
    oasisRT.address.V0_SECP256K1ETH_CONTEXT_IDENTIFIER,
    oasisRT.address.V0_SECP256K1ETH_CONTEXT_VERSION,
    evmBytes,
  )
  const bech32Address = oasisRT.address.toBech32(address)
  return bech32Address
}
