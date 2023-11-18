//import Appizpanel from 'appiz-panel'
import Appizpanel from '../src/appizpanel'

describe('Appizpanel Tests', () => {
  describe('when apiKey is provided', () => {
    beforeAll(() => {
      Appizpanel.configure({
        apiKey: 'your_api_key',
        apiVersion: '1.0.0',
        endpointUrl:
          process.env.APPIZPANEL_ENDPOINT_URL || 'https://api.appizpanel.io',
        noRetryIfRateLimited: true,
        requestTimeout: 5000,
      })
    })

    it('should create an instance with configured values', () => {
      const appizpanelInstance = new Appizpanel({
        apiKey: 'your_api_key',
      })
    })
  })

  describe('when apiKey is not provided', () => {
    it('should throw an error during instance creation', () => {
      expect(() => {
        const appizpanelInstance = new Appizpanel()
      }).toThrowError('An API key is required to connect to Appizpanel')
    })
  })
})

describe('when apiKey is not provided', () => {
  it('should throw an error during instance creation', () => {
    // API anahtarı belirtilmediği durumda bir hata almalısınız.
    expect(() => {
      const appizpanelInstance = new Appizpanel()
    }).toThrowError('An API key is required to connect to Appizpanel')

    // API anahtarının geçerli olup olmadığını kontrol etme
    expect(Appizpanel.isApiKeyValid()).toBe(false)
  })
})

