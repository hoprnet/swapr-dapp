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

import * as runtime from '../runtime'
import {
  BridgeStatusResponseDTO,
  BridgeStatusResponseDTOFromJSON,
  BridgeStatusResponseDTOToJSON,
  BridgeSwapInputDTO,
  BridgeSwapInputDTOFromJSON,
  BridgeSwapInputDTOToJSON,
  DexSwapInputDTO,
  DexSwapInputDTOFromJSON,
  DexSwapInputDTOToJSON,
  GasPriceResponseDTO,
  GasPriceResponseDTOFromJSON,
  GasPriceResponseDTOToJSON,
  HealthResponseDTO,
  HealthResponseDTOFromJSON,
  HealthResponseDTOToJSON,
  SingleTxDTO,
  SingleTxDTOFromJSON,
  SingleTxDTOToJSON,
  SingleTxOutputDTO,
  SingleTxOutputDTOFromJSON,
  SingleTxOutputDTOToJSON,
  TokenPriceResponseDTO,
  TokenPriceResponseDTOFromJSON,
  TokenPriceResponseDTOToJSON,
  TransactionReceiptResponseDTO,
  TransactionReceiptResponseDTOFromJSON,
  TransactionReceiptResponseDTOToJSON,
} from '../models'

export interface AppControllerDisableBridgeSwapRequest {
  bridgeSwapInputDTO: BridgeSwapInputDTO
}

export interface AppControllerDisableDexSwapRequest {
  dexSwapInputDTO: DexSwapInputDTO
}

export interface AppControllerEnableBridgeSwapRequest {
  bridgeSwapInputDTO: BridgeSwapInputDTO
}

export interface AppControllerEnableDexSwapRequest {
  dexSwapInputDTO: DexSwapInputDTO
}

export interface AppControllerGetBridgingStatusRequest {
  transactionHash: string
  fromChainId: string
  toChainId: string
  bridgeName?: string
  aPIKEY?: string
}

export interface AppControllerGetGasPriceRequest {
  chainId: string
}

export interface AppControllerGetSingleTxRequest {
  singleTxDTO: SingleTxDTO
  aPIKEY?: string
}

export interface AppControllerGetTokenPriceRequest {
  tokenAddress: string
  chainId: string
}

export interface AppControllerGetTransactionReceiptRequest {
  transactionHash: string
  chainId: string
  aPIKEY?: string
}

/**
 *
 */
export class ServerApi extends runtime.BaseAPI {
  /**
   */
  async appControllerDisableBridgeSwapRaw(
    requestParameters: AppControllerDisableBridgeSwapRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<object>> {
    if (requestParameters.bridgeSwapInputDTO === null || requestParameters.bridgeSwapInputDTO === undefined) {
      throw new runtime.RequiredError(
        'bridgeSwapInputDTO',
        'Required parameter requestParameters.bridgeSwapInputDTO was null or undefined when calling appControllerDisableBridgeSwap.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/v2/disable-bridge-swap`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: BridgeSwapInputDTOToJSON(requestParameters.bridgeSwapInputDTO),
      },
      initOverrides
    )

    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   */
  async appControllerDisableBridgeSwap(
    requestParameters: AppControllerDisableBridgeSwapRequest,
    initOverrides?: RequestInit
  ): Promise<object> {
    const response = await this.appControllerDisableBridgeSwapRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   */
  async appControllerDisableDexSwapRaw(
    requestParameters: AppControllerDisableDexSwapRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<object>> {
    if (requestParameters.dexSwapInputDTO === null || requestParameters.dexSwapInputDTO === undefined) {
      throw new runtime.RequiredError(
        'dexSwapInputDTO',
        'Required parameter requestParameters.dexSwapInputDTO was null or undefined when calling appControllerDisableDexSwap.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/v2/disable-dex-swap`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: DexSwapInputDTOToJSON(requestParameters.dexSwapInputDTO),
      },
      initOverrides
    )

    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   */
  async appControllerDisableDexSwap(
    requestParameters: AppControllerDisableDexSwapRequest,
    initOverrides?: RequestInit
  ): Promise<object> {
    const response = await this.appControllerDisableDexSwapRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   */
  async appControllerEnableBridgeSwapRaw(
    requestParameters: AppControllerEnableBridgeSwapRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<object>> {
    if (requestParameters.bridgeSwapInputDTO === null || requestParameters.bridgeSwapInputDTO === undefined) {
      throw new runtime.RequiredError(
        'bridgeSwapInputDTO',
        'Required parameter requestParameters.bridgeSwapInputDTO was null or undefined when calling appControllerEnableBridgeSwap.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/v2/enable-bridge-swap`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: BridgeSwapInputDTOToJSON(requestParameters.bridgeSwapInputDTO),
      },
      initOverrides
    )

    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   */
  async appControllerEnableBridgeSwap(
    requestParameters: AppControllerEnableBridgeSwapRequest,
    initOverrides?: RequestInit
  ): Promise<object> {
    const response = await this.appControllerEnableBridgeSwapRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   */
  async appControllerEnableDexSwapRaw(
    requestParameters: AppControllerEnableDexSwapRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<object>> {
    if (requestParameters.dexSwapInputDTO === null || requestParameters.dexSwapInputDTO === undefined) {
      throw new runtime.RequiredError(
        'dexSwapInputDTO',
        'Required parameter requestParameters.dexSwapInputDTO was null or undefined when calling appControllerEnableDexSwap.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/v2/enable-dex-swap`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: DexSwapInputDTOToJSON(requestParameters.dexSwapInputDTO),
      },
      initOverrides
    )

    return new runtime.JSONApiResponse<any>(response)
  }

  /**
   */
  async appControllerEnableDexSwap(
    requestParameters: AppControllerEnableDexSwapRequest,
    initOverrides?: RequestInit
  ): Promise<object> {
    const response = await this.appControllerEnableDexSwapRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   */
  async appControllerGetBridgingStatusRaw(
    requestParameters: AppControllerGetBridgingStatusRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<BridgeStatusResponseDTO>> {
    if (requestParameters.transactionHash === null || requestParameters.transactionHash === undefined) {
      throw new runtime.RequiredError(
        'transactionHash',
        'Required parameter requestParameters.transactionHash was null or undefined when calling appControllerGetBridgingStatus.'
      )
    }

    if (requestParameters.fromChainId === null || requestParameters.fromChainId === undefined) {
      throw new runtime.RequiredError(
        'fromChainId',
        'Required parameter requestParameters.fromChainId was null or undefined when calling appControllerGetBridgingStatus.'
      )
    }

    if (requestParameters.toChainId === null || requestParameters.toChainId === undefined) {
      throw new runtime.RequiredError(
        'toChainId',
        'Required parameter requestParameters.toChainId was null or undefined when calling appControllerGetBridgingStatus.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.transactionHash !== undefined) {
      queryParameters['transactionHash'] = requestParameters.transactionHash
    }

    if (requestParameters.fromChainId !== undefined) {
      queryParameters['fromChainId'] = requestParameters.fromChainId
    }

    if (requestParameters.toChainId !== undefined) {
      queryParameters['toChainId'] = requestParameters.toChainId
    }

    if (requestParameters.bridgeName !== undefined) {
      queryParameters['bridgeName'] = requestParameters.bridgeName
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.aPIKEY !== undefined && requestParameters.aPIKEY !== null) {
      headerParameters['API-KEY'] = String(requestParameters.aPIKEY)
    }

    const response = await this.request(
      {
        path: `/v2/bridge-status`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => BridgeStatusResponseDTOFromJSON(jsonValue))
  }

  /**
   */
  async appControllerGetBridgingStatus(
    requestParameters: AppControllerGetBridgingStatusRequest,
    initOverrides?: RequestInit
  ): Promise<BridgeStatusResponseDTO> {
    const response = await this.appControllerGetBridgingStatusRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   */
  async appControllerGetGasPriceRaw(
    requestParameters: AppControllerGetGasPriceRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<GasPriceResponseDTO>> {
    if (requestParameters.chainId === null || requestParameters.chainId === undefined) {
      throw new runtime.RequiredError(
        'chainId',
        'Required parameter requestParameters.chainId was null or undefined when calling appControllerGetGasPrice.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.chainId !== undefined) {
      queryParameters['chainId'] = requestParameters.chainId
    }

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/v2/gas-price`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => GasPriceResponseDTOFromJSON(jsonValue))
  }

  /**
   */
  async appControllerGetGasPrice(
    requestParameters: AppControllerGetGasPriceRequest,
    initOverrides?: RequestInit
  ): Promise<GasPriceResponseDTO> {
    const response = await this.appControllerGetGasPriceRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   */
  async appControllerGetHealthRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<HealthResponseDTO>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/v2/health`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => HealthResponseDTOFromJSON(jsonValue))
  }

  /**
   */
  async appControllerGetHealth(initOverrides?: RequestInit): Promise<HealthResponseDTO> {
    const response = await this.appControllerGetHealthRaw(initOverrides)
    return await response.value()
  }

  /**
   */
  async appControllerGetSingleTxRaw(
    requestParameters: AppControllerGetSingleTxRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<SingleTxOutputDTO>> {
    if (requestParameters.singleTxDTO === null || requestParameters.singleTxDTO === undefined) {
      throw new runtime.RequiredError(
        'singleTxDTO',
        'Required parameter requestParameters.singleTxDTO was null or undefined when calling appControllerGetSingleTx.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    if (requestParameters.aPIKEY !== undefined && requestParameters.aPIKEY !== null) {
      headerParameters['API-KEY'] = String(requestParameters.aPIKEY)
    }

    const response = await this.request(
      {
        path: `/v2/build-tx`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: SingleTxDTOToJSON(requestParameters.singleTxDTO),
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => SingleTxOutputDTOFromJSON(jsonValue))
  }

  /**
   */
  async appControllerGetSingleTx(
    requestParameters: AppControllerGetSingleTxRequest,
    initOverrides?: RequestInit
  ): Promise<SingleTxOutputDTO> {
    const response = await this.appControllerGetSingleTxRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   */
  async appControllerGetTokenPriceRaw(
    requestParameters: AppControllerGetTokenPriceRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<TokenPriceResponseDTO>> {
    if (requestParameters.tokenAddress === null || requestParameters.tokenAddress === undefined) {
      throw new runtime.RequiredError(
        'tokenAddress',
        'Required parameter requestParameters.tokenAddress was null or undefined when calling appControllerGetTokenPrice.'
      )
    }

    if (requestParameters.chainId === null || requestParameters.chainId === undefined) {
      throw new runtime.RequiredError(
        'chainId',
        'Required parameter requestParameters.chainId was null or undefined when calling appControllerGetTokenPrice.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.tokenAddress !== undefined) {
      queryParameters['tokenAddress'] = requestParameters.tokenAddress
    }

    if (requestParameters.chainId !== undefined) {
      queryParameters['chainId'] = requestParameters.chainId
    }

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/v2/token-price`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => TokenPriceResponseDTOFromJSON(jsonValue))
  }

  /**
   */
  async appControllerGetTokenPrice(
    requestParameters: AppControllerGetTokenPriceRequest,
    initOverrides?: RequestInit
  ): Promise<TokenPriceResponseDTO> {
    const response = await this.appControllerGetTokenPriceRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   */
  async appControllerGetTransactionReceiptRaw(
    requestParameters: AppControllerGetTransactionReceiptRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<TransactionReceiptResponseDTO>> {
    if (requestParameters.transactionHash === null || requestParameters.transactionHash === undefined) {
      throw new runtime.RequiredError(
        'transactionHash',
        'Required parameter requestParameters.transactionHash was null or undefined when calling appControllerGetTransactionReceipt.'
      )
    }

    if (requestParameters.chainId === null || requestParameters.chainId === undefined) {
      throw new runtime.RequiredError(
        'chainId',
        'Required parameter requestParameters.chainId was null or undefined when calling appControllerGetTransactionReceipt.'
      )
    }

    const queryParameters: any = {}

    if (requestParameters.transactionHash !== undefined) {
      queryParameters['transactionHash'] = requestParameters.transactionHash
    }

    if (requestParameters.chainId !== undefined) {
      queryParameters['chainId'] = requestParameters.chainId
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.aPIKEY !== undefined && requestParameters.aPIKEY !== null) {
      headerParameters['API-KEY'] = String(requestParameters.aPIKEY)
    }

    const response = await this.request(
      {
        path: `/v2/tx-receipt`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, jsonValue => TransactionReceiptResponseDTOFromJSON(jsonValue))
  }

  /**
   */
  async appControllerGetTransactionReceipt(
    requestParameters: AppControllerGetTransactionReceiptRequest,
    initOverrides?: RequestInit
  ): Promise<TransactionReceiptResponseDTO> {
    const response = await this.appControllerGetTransactionReceiptRaw(requestParameters, initOverrides)
    return await response.value()
  }
}
