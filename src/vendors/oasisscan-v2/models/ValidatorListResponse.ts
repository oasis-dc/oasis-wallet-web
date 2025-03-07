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
    ValidatorInfo,
    ValidatorInfoFromJSON,
    ValidatorInfoFromJSONTyped,
    ValidatorInfoToJSON,
} from './';

/**
 * 
 * @export
 * @interface ValidatorListResponse
 */
export interface ValidatorListResponse {
    /**
     * 
     * @type {Array<ValidatorInfo>}
     * @memberof ValidatorListResponse
     */
    list: Array<ValidatorInfo>;
    /**
     * 
     * @type {number}
     * @memberof ValidatorListResponse
     */
    active: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatorListResponse
     */
    inactive: number;
    /**
     * 
     * @type {number}
     * @memberof ValidatorListResponse
     */
    delegators: number;
}

export function ValidatorListResponseFromJSON(json: any): ValidatorListResponse {
    return ValidatorListResponseFromJSONTyped(json, false);
}

export function ValidatorListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidatorListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'list': ((json['list'] as Array<any>).map(ValidatorInfoFromJSON)),
        'active': json['active'],
        'inactive': json['inactive'],
        'delegators': json['delegators'],
    };
}

export function ValidatorListResponseToJSON(value?: ValidatorListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'list': ((value.list as Array<any>).map(ValidatorInfoToJSON)),
        'active': value.active,
        'inactive': value.inactive,
        'delegators': value.delegators,
    };
}


