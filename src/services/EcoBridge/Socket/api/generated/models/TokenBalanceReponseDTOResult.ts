/* tslint:disable */
/* eslint-disable */
/**
 * Movr Aggregator API
 * The Movr Aggregator API description
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime'
/**
 *
 * @export
 * @interface TokenBalanceReponseDTOResult
 */
export interface TokenBalanceReponseDTOResult {
  /**
   *
   * @type {number}
   * @memberof TokenBalanceReponseDTOResult
   */
  chainId: number
  /**
   *
   * @type {string}
   * @memberof TokenBalanceReponseDTOResult
   */
  tokenAddress: string
  /**
   *
   * @type {string}
   * @memberof TokenBalanceReponseDTOResult
   */
  userAddress: string
  /**
   *
   * @type {string}
   * @memberof TokenBalanceReponseDTOResult
   */
  balance: string
  /**
   *
   * @type {number}
   * @memberof TokenBalanceReponseDTOResult
   */
  decimals: number
  /**
   *
   * @type {string}
   * @memberof TokenBalanceReponseDTOResult
   */
  icon: string
  /**
   *
   * @type {string}
   * @memberof TokenBalanceReponseDTOResult
   */
  symbol: string
  /**
   *
   * @type {string}
   * @memberof TokenBalanceReponseDTOResult
   */
  name: string
}

export function TokenBalanceReponseDTOResultFromJSON(json: any): TokenBalanceReponseDTOResult {
  return TokenBalanceReponseDTOResultFromJSONTyped(json, false)
}

export function TokenBalanceReponseDTOResultFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TokenBalanceReponseDTOResult {
  if (json === undefined || json === null) {
    return json
  }
  return {
    chainId: json['chainId'],
    tokenAddress: json['tokenAddress'],
    userAddress: json['userAddress'],
    balance: json['balance'],
    decimals: json['decimals'],
    icon: json['icon'],
    symbol: json['symbol'],
    name: json['name'],
  }
}

export function TokenBalanceReponseDTOResultToJSON(value?: TokenBalanceReponseDTOResult | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    chainId: value.chainId,
    tokenAddress: value.tokenAddress,
    userAddress: value.userAddress,
    balance: value.balance,
    decimals: value.decimals,
    icon: value.icon,
    symbol: value.symbol,
    name: value.name,
  }
}
