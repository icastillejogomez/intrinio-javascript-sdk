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
    define(['ApiClient', 'model/ApiResponseDataTags', 'model/DataTag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseDataTags'), require('../model/DataTag'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.DataTagApi = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ApiResponseDataTags, root.intrinioSDK.DataTag);
  }
}(this, function(ApiClient, ApiResponseDataTags, DataTag) {
  'use strict';

  /**
   * DataTag service.
   * @module api/DataTagApi
   * @version 1.0.0
   */

  /**
   * Constructs a new DataTagApi. 
   * @alias module:api/DataTagApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Filter Data Tags
     * Returns Data Tags that match the given filters
     * @param {Object} opts Optional parameters
     * @param {String} opts.tag Tag
     * @param {String} opts.type Type
     * @param {String} opts.parent ID of tag parent
     * @param {module:model/String} opts.statementCode Statement Code
     * @param {module:model/String} opts.fsTemplate Template (default to industrial)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseDataTags} and HTTP response
     */
    this.filterDataTagsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'tag': opts['tag'],
        'type': opts['type'],
        'parent': opts['parent'],
        'statement_code': opts['statementCode'],
        'fs_template': opts['fsTemplate'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseDataTags;

      return this.apiClient.callApi(
        '/data_tags/filter', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Filter Data Tags
     * Returns Data Tags that match the given filters
     * @param {Object} opts Optional parameters
     * @param {String} opts.tag Tag
     * @param {String} opts.type Type
     * @param {String} opts.parent ID of tag parent
     * @param {module:model/String} opts.statementCode Statement Code
     * @param {module:model/String} opts.fsTemplate Template (default to industrial)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseDataTags}
     */
    this.filterDataTags = function(opts) {
      return this.filterDataTagsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get All Data Tags
     * Returns All Data Tags
     * @param {Object} opts Optional parameters
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseDataTags} and HTTP response
     */
    this.getAllDataTagsWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseDataTags;

      return this.apiClient.callApi(
        '/data_tags', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get All Data Tags
     * Returns All Data Tags
     * @param {Object} opts Optional parameters
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseDataTags}
     */
    this.getAllDataTags = function(opts) {
      return this.getAllDataTagsWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a Data Tag by ID
     * Returns a Data Tag with the specified &#x60;identifier&#x60;
     * @param {String} identifier The Intrinio ID or the code-name of the Data Tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DataTag} and HTTP response
     */
    this.getDataTagByIdWithHttpInfo = function(identifier) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getDataTagById");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DataTag;

      return this.apiClient.callApi(
        '/data_tags/{identifier}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a Data Tag by ID
     * Returns a Data Tag with the specified &#x60;identifier&#x60;
     * @param {String} identifier The Intrinio ID or the code-name of the Data Tag
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DataTag}
     */
    this.getDataTagById = function(identifier) {
      return this.getDataTagByIdWithHttpInfo(identifier)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search Data Tags
     * Searches for Data Tags matching the text &#x60;query&#x60;
     * @param {String} query 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseDataTags} and HTTP response
     */
    this.searchDataTagsWithHttpInfo = function(query) {
      var postBody = null;

      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling searchDataTags");
      }


      var pathParams = {
      };
      var queryParams = {
        'query': query,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseDataTags;

      return this.apiClient.callApi(
        '/data_tags/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search Data Tags
     * Searches for Data Tags matching the text &#x60;query&#x60;
     * @param {String} query 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseDataTags}
     */
    this.searchDataTags = function(query) {
      return this.searchDataTagsWithHttpInfo(query)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
