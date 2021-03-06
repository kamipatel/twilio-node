/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import { CredentialListInstance } from './v1/credential';


/**
 * Initialize the V1 version of Accounts
 */
declare class V1 extends Version {
  /**
   * Initialize the V1 version of Accounts
   *
   * @param domain - The twilio domain
   */
  constructor(domain: any);

  readonly credentials: CredentialListInstance;
}

export = V1;
