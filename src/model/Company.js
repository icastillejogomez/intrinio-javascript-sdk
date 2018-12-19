/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinio-sdk) {
      root.intrinio-sdk = {};
    }
    root.intrinio-sdk.Company = factory(root.intrinio-sdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Company model module.
   * @module model/Company
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Company</code>.
   * A company that submits filings to the SEC and has a security traded primarily on a US exchange
   * @alias module:model/Company
   * @class
   */
  var exports = function() {
    var _this = this;

































  };

  /**
   * Constructs a <code>Company</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Company} obj Optional instance to populate.
   * @return {module:model/Company} The populated <code>Company</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('lei')) {
        obj['lei'] = ApiClient.convertToType(data['lei'], 'String');
      }
      if (data.hasOwnProperty('legal_name')) {
        obj['legal_name'] = ApiClient.convertToType(data['legal_name'], 'String');
      }
      if (data.hasOwnProperty('stock_exchange')) {
        obj['stock_exchange'] = ApiClient.convertToType(data['stock_exchange'], 'String');
      }
      if (data.hasOwnProperty('sic')) {
        obj['sic'] = ApiClient.convertToType(data['sic'], 'String');
      }
      if (data.hasOwnProperty('short_description')) {
        obj['short_description'] = ApiClient.convertToType(data['short_description'], 'String');
      }
      if (data.hasOwnProperty('long_description')) {
        obj['long_description'] = ApiClient.convertToType(data['long_description'], 'String');
      }
      if (data.hasOwnProperty('ceo')) {
        obj['ceo'] = ApiClient.convertToType(data['ceo'], 'String');
      }
      if (data.hasOwnProperty('company_url')) {
        obj['company_url'] = ApiClient.convertToType(data['company_url'], 'String');
      }
      if (data.hasOwnProperty('business_address')) {
        obj['business_address'] = ApiClient.convertToType(data['business_address'], 'String');
      }
      if (data.hasOwnProperty('mailing_address')) {
        obj['mailing_address'] = ApiClient.convertToType(data['mailing_address'], 'String');
      }
      if (data.hasOwnProperty('business_phone_no')) {
        obj['business_phone_no'] = ApiClient.convertToType(data['business_phone_no'], 'String');
      }
      if (data.hasOwnProperty('hq_address1')) {
        obj['hq_address1'] = ApiClient.convertToType(data['hq_address1'], 'String');
      }
      if (data.hasOwnProperty('hq_address2')) {
        obj['hq_address2'] = ApiClient.convertToType(data['hq_address2'], 'String');
      }
      if (data.hasOwnProperty('hq_address_city')) {
        obj['hq_address_city'] = ApiClient.convertToType(data['hq_address_city'], 'String');
      }
      if (data.hasOwnProperty('hq_address_postal_code')) {
        obj['hq_address_postal_code'] = ApiClient.convertToType(data['hq_address_postal_code'], 'String');
      }
      if (data.hasOwnProperty('entity_legal_form')) {
        obj['entity_legal_form'] = ApiClient.convertToType(data['entity_legal_form'], 'String');
      }
      if (data.hasOwnProperty('cik')) {
        obj['cik'] = ApiClient.convertToType(data['cik'], 'String');
      }
      if (data.hasOwnProperty('latest_filing_date')) {
        obj['latest_filing_date'] = ApiClient.convertToType(data['latest_filing_date'], 'Date');
      }
      if (data.hasOwnProperty('hq_state')) {
        obj['hq_state'] = ApiClient.convertToType(data['hq_state'], 'String');
      }
      if (data.hasOwnProperty('hq_country')) {
        obj['hq_country'] = ApiClient.convertToType(data['hq_country'], 'String');
      }
      if (data.hasOwnProperty('inc_state')) {
        obj['inc_state'] = ApiClient.convertToType(data['inc_state'], 'String');
      }
      if (data.hasOwnProperty('inc_country')) {
        obj['inc_country'] = ApiClient.convertToType(data['inc_country'], 'String');
      }
      if (data.hasOwnProperty('employees')) {
        obj['employees'] = ApiClient.convertToType(data['employees'], 'Number');
      }
      if (data.hasOwnProperty('entity_status')) {
        obj['entity_status'] = ApiClient.convertToType(data['entity_status'], 'String');
      }
      if (data.hasOwnProperty('sector')) {
        obj['sector'] = ApiClient.convertToType(data['sector'], 'String');
      }
      if (data.hasOwnProperty('industry_category')) {
        obj['industry_category'] = ApiClient.convertToType(data['industry_category'], 'String');
      }
      if (data.hasOwnProperty('industry_group')) {
        obj['industry_group'] = ApiClient.convertToType(data['industry_group'], 'String');
      }
      if (data.hasOwnProperty('template')) {
        obj['template'] = ApiClient.convertToType(data['template'], 'String');
      }
      if (data.hasOwnProperty('standardized_active')) {
        obj['standardized_active'] = ApiClient.convertToType(data['standardized_active'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID of the company
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The stock market ticker symbol associated with the company's common stock securities
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * The company's common name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The Legal Entity Identifier (LEI) assigned to the company
   * @member {String} lei
   */
  exports.prototype['lei'] = undefined;
  /**
   * The company's official legal name
   * @member {String} legal_name
   */
  exports.prototype['legal_name'] = undefined;
  /**
   * The Stock Exchange where the company's common stock is primarily traded
   * @member {String} stock_exchange
   */
  exports.prototype['stock_exchange'] = undefined;
  /**
   * The Standard Industrial Classification (SIC) determined by the company and filed with the SEC
   * @member {String} sic
   */
  exports.prototype['sic'] = undefined;
  /**
   * A one or two sentence description of the company's operations
   * @member {String} short_description
   */
  exports.prototype['short_description'] = undefined;
  /**
   * A one paragraph description of the company's operations and other corporate actions
   * @member {String} long_description
   */
  exports.prototype['long_description'] = undefined;
  /**
   * The Chief Executive Officer of the company
   * @member {String} ceo
   */
  exports.prototype['ceo'] = undefined;
  /**
   * The URL of the company's primary corporate website or primary internet property
   * @member {String} company_url
   */
  exports.prototype['company_url'] = undefined;
  /**
   * The company's business address
   * @member {String} business_address
   */
  exports.prototype['business_address'] = undefined;
  /**
   * The mailing address reported by the company
   * @member {String} mailing_address
   */
  exports.prototype['mailing_address'] = undefined;
  /**
   * The phone number reported by the company
   * @member {String} business_phone_no
   */
  exports.prototype['business_phone_no'] = undefined;
  /**
   * The company's headquarters address - line 1
   * @member {String} hq_address1
   */
  exports.prototype['hq_address1'] = undefined;
  /**
   * The company's headquarters address - line 2
   * @member {String} hq_address2
   */
  exports.prototype['hq_address2'] = undefined;
  /**
   * The company's headquarters city
   * @member {String} hq_address_city
   */
  exports.prototype['hq_address_city'] = undefined;
  /**
   * The company's headquarters postal code
   * @member {String} hq_address_postal_code
   */
  exports.prototype['hq_address_postal_code'] = undefined;
  /**
   * The company's legal organization form
   * @member {String} entity_legal_form
   */
  exports.prototype['entity_legal_form'] = undefined;
  /**
   * The Central Index Key (CIK) assigned to the company by the SEC as a unique identifier, used in SEC filings
   * @member {String} cik
   */
  exports.prototype['cik'] = undefined;
  /**
   * The date of the company's last filing with the SEC
   * @member {Date} latest_filing_date
   */
  exports.prototype['latest_filing_date'] = undefined;
  /**
   * The state (US & Canada Only) where the company headquarters are located
   * @member {String} hq_state
   */
  exports.prototype['hq_state'] = undefined;
  /**
   * The country where the company headquarters are located
   * @member {String} hq_country
   */
  exports.prototype['hq_country'] = undefined;
  /**
   * The state (US & Canada Only) where the company is incorporated
   * @member {String} inc_state
   */
  exports.prototype['inc_state'] = undefined;
  /**
   * The country where the company is incorporated
   * @member {String} inc_country
   */
  exports.prototype['inc_country'] = undefined;
  /**
   * The number of employees working for the company
   * @member {Number} employees
   */
  exports.prototype['employees'] = undefined;
  /**
   * @member {String} entity_status
   */
  exports.prototype['entity_status'] = undefined;
  /**
   * The company's operating sector
   * @member {String} sector
   */
  exports.prototype['sector'] = undefined;
  /**
   * The company's operating industry category
   * @member {String} industry_category
   */
  exports.prototype['industry_category'] = undefined;
  /**
   * The company's operating industry group
   * @member {String} industry_group
   */
  exports.prototype['industry_group'] = undefined;
  /**
   * The financial statement template used by Intrinio to standardize the as reported data
   * @member {String} template
   */
  exports.prototype['template'] = undefined;
  /**
   * If true, the company has standardized and as reported fundamental data via the Intrinio API; if false, the company has as-reported data only
   * @member {Boolean} standardized_active
   */
  exports.prototype['standardized_active'] = undefined;



  return exports;
}));


