"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

export default class Appizpanel {
  private static _apiKey: string;
  private static _apiVersion: string;
  private static _apiVersionMajor: string;
  private static _endpointUrl: string;
  private static _noRetryIfRateLimited: boolean;
  private static _requestTimeout: number;

  constructor(configs: AppizpanelConfig = {}) {
    const defaultConfig = this.default_config();
    const apiVersion: string = configs.apiVersion || defaultConfig.apiVersion!;

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

  private default_config(): AppizpanelConfig {
    return {
      apiKey: process.env.APPIZPANEL_API_KEY || '',
      apiVersion: '0.1.0',
      endpointUrl: process.env.APPIZPANEL_ENDPOINT_URL || 'https://api.appizpanel.io',
      noRetryIfRateLimited: false,
      requestTimeout: 300 * 1000,
    };
  }

  public static configure(config: AppizpanelConfig): void {
  
    this._apiKey = config.apiKey || '';
    this._apiVersion = config.apiVersion || '';
    this._apiVersionMajor = config.apiVersion ? config.apiVersion.split('.')[0] : '';
    this._endpointUrl = config.endpointUrl || '';
    this._noRetryIfRateLimited = config.noRetryIfRateLimited || false;
    this._requestTimeout = config.requestTimeout || 0;
  }

  public static isApiKeyValid(): boolean {
    return Appizpanel._apiKey !== '';
  }

  private  getMissingApiKeyErrorMessage(): string {
    return 'An API key is required to connect to Appizpanel';
  }
}

interface AppizpanelConfig {
  apiKey?: string;
  apiVersion?: string;
  endpointUrl?: string;
  noRetryIfRateLimited?: boolean;
  requestTimeout?: number;
}
