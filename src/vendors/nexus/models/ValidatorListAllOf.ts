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
    Validator,
    ValidatorFromJSON,
    ValidatorFromJSONTyped,
    ValidatorToJSON,
    ValidatorAggStats,
    ValidatorAggStatsFromJSON,
    ValidatorAggStatsFromJSONTyped,
    ValidatorAggStatsToJSON,
} from './';

/**
 * A list of validators registered at the consensus layer, plus summary
 * statistics across all consensus validators.
 * @export
 * @interface ValidatorListAllOf
 */
export interface ValidatorListAllOf {
    /**
     * 
     * @type {Array<Validator>}
     * @memberof ValidatorListAllOf
     */
    validators: Array<Validator>;
    /**
     * Summary statistics across all consensus validators.
     * @type {ValidatorAggStats}
     * @memberof ValidatorListAllOf
     */
    stats: ValidatorAggStats;
}

export function ValidatorListAllOfFromJSON(json: any): ValidatorListAllOf {
    return ValidatorListAllOfFromJSONTyped(json, false);
}

export function ValidatorListAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidatorListAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'validators': ((json['validators'] as Array<any>).map(ValidatorFromJSON)),
        'stats': ValidatorAggStatsFromJSON(json['stats']),
    };
}

export function ValidatorListAllOfToJSON(value?: ValidatorListAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'validators': ((value.validators as Array<any>).map(ValidatorToJSON)),
        'stats': ValidatorAggStatsToJSON(value.stats),
    };
}


