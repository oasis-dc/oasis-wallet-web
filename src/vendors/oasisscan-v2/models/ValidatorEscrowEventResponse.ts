/* tslint:disable */
/* eslint-disable */
/**
 * 
 * This api document example is the Mainnet document, and the Testnet base URL is api.oasisscan.com/v2/testnet
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ChainTransactionListInfo,
    ChainTransactionListInfoFromJSON,
    ChainTransactionListInfoFromJSONTyped,
    ChainTransactionListInfoToJSON,
} from './';

/**
 * 
 * @export
 * @interface ValidatorEscrowEventResponse
 */
export interface ValidatorEscrowEventResponse {
    /**
     * 
     * @type {Array<ChainTransactionListInfo>}
     * @memberof ValidatorEscrowEventResponse
     */
    list: Array<ChainTransactionListInfo>;
    /**
     * 
     * @type {number}
     * @memberof ValidatorEscrowEventResponse
     */
    page?: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatorEscrowEventResponse
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatorEscrowEventResponse
     */
    maxPage?: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatorEscrowEventResponse
     */
    totalSize?: number;
}

export function ValidatorEscrowEventResponseFromJSON(json: any): ValidatorEscrowEventResponse {
    return ValidatorEscrowEventResponseFromJSONTyped(json, false);
}

export function ValidatorEscrowEventResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidatorEscrowEventResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'list': ((json['list'] as Array<any>).map(ChainTransactionListInfoFromJSON)),
        'page': !exists(json, 'page') ? undefined : json['page'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'maxPage': !exists(json, 'maxPage') ? undefined : json['maxPage'],
        'totalSize': !exists(json, 'totalSize') ? undefined : json['totalSize'],
    };
}

export function ValidatorEscrowEventResponseToJSON(value?: ValidatorEscrowEventResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'list': ((value.list as Array<any>).map(ChainTransactionListInfoToJSON)),
        'page': value.page,
        'size': value.size,
        'maxPage': value.maxPage,
        'totalSize': value.totalSize,
    };
}


