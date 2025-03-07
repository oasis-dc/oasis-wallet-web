/* tslint:disable */
/* eslint-disable */
/**
 * Oasis Nexus API V1
 * An API for accessing indexed data from the Oasis Network.  <!-- Acts as a separator after search in sidebar --> # Endpoints 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    BareTokenHolder,
    BareTokenHolderFromJSON,
    BareTokenHolderFromJSONTyped,
    BareTokenHolderToJSON,
} from './';

/**
 * A list of token holders for a specific (implied) runtime and token.
 * @export
 * @interface TokenHolderListAllOf
 */
export interface TokenHolderListAllOf {
    /**
     * 
     * @type {Array<BareTokenHolder>}
     * @memberof TokenHolderListAllOf
     */
    holders: Array<BareTokenHolder>;
}

export function TokenHolderListAllOfFromJSON(json: any): TokenHolderListAllOf {
    return TokenHolderListAllOfFromJSONTyped(json, false);
}

export function TokenHolderListAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenHolderListAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'holders': ((json['holders'] as Array<any>).map(BareTokenHolderFromJSON)),
    };
}

export function TokenHolderListAllOfToJSON(value?: TokenHolderListAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'holders': ((value.holders as Array<any>).map(BareTokenHolderToJSON)),
    };
}


