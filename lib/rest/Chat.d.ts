/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import TwilioClient = require('./Twilio');
import V1 = require('./chat/V1');
import V2 = require('./chat/V2');
import { CredentialListInstance } from './chat/v2/credential';
import { ServiceListInstance } from './chat/v2/service';


/**
 * Initialize chat domain
 */
declare class Chat extends Domain {
  /**
   * Initialize chat domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: TwilioClient);

  /**
   * Credential resource
   */
  readonly credentials: CredentialListInstance;
  /**
   * Service resource
   */
  readonly services: ServiceListInstance;
  readonly v1: V1;
  readonly v2: V2;
}

export = Chat;
