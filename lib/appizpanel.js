"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.defineProperty(exports, "__esModule", { value: true });
var Appizpanel = /** @class */ (function () {
    function Appizpanel(configs) {
        if (configs === void 0) { configs = {}; }
        var defaultConfig = this.default_config();
        var apiVersion = configs.apiVersion || defaultConfig.apiVersion;
        Appizpanel._apiKey = configs.apiKey || defaultConfig.apiKey || '';
        Appizpanel._apiVersion = apiVersion;
        Appizpanel._apiVersionMajor = apiVersion.split('.')[0];
        Appizpanel._endpointUrl = configs.endpointUrl || defaultConfig.endpointUrl || '';
        Appizpanel._noRetryIfRateLimited = configs.noRetryIfRateLimited || defaultConfig.noRetryIfRateLimited || false;
        Appizpanel._requestTimeout = configs.requestTimeout || defaultConfig.requestTimeout || 0;
        if (!Appizpanel._apiKey) {
            throw new Error(this.getMissingApiKeyErrorMessage());
        }
    }
    Appizpanel.prototype.default_config = function () {
        return {
            apiKey: process.env.APPIZPANEL_API_KEY || '',
            apiVersion: '0.1.0',
            endpointUrl: process.env.APPIZPANEL_ENDPOINT_URL || 'https://api.appizpanel.io',
            noRetryIfRateLimited: false,
            requestTimeout: 300 * 1000,
        };
    };
    Appizpanel.configure = function (config) {
        this._apiKey = config.apiKey || '';
        this._apiVersion = config.apiVersion || '';
        this._apiVersionMajor = config.apiVersion ? config.apiVersion.split('.')[0] : '';
        this._endpointUrl = config.endpointUrl || '';
        this._noRetryIfRateLimited = config.noRetryIfRateLimited || false;
        this._requestTimeout = config.requestTimeout || 0;
    };
    Appizpanel.isApiKeyValid = function () {
        return Appizpanel._apiKey !== '';
    };
    Appizpanel.prototype.getMissingApiKeyErrorMessage = function () {
        return 'An API key is required to connect to Appizpanel';
    };
    return Appizpanel;
}());

exports.default = Appizpanel;
