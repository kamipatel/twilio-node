/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Version = require('../../base/Version');
import { ServiceListInstance } from './acc_security/service';


/**
 * Initialize the AccSecurity version of Preview
 */
declare class AccSecurity extends Version {
  /**
   * Initialize the AccSecurity version of Preview
   *
   * @param domain - The twilio domain
   */
  constructor(domain: any);

  readonly services: ServiceListInstance;
}

export = AccSecurity;
