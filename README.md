# WhatsApp Cloud API HTTP Client

A strongly-typed HTTP client for the WhatsApp Cloud API, generated from OpenAPI specification. This package provides an Axios-based client with complete TypeScript type definitions for the WhatsApp Business Platform API.

## Installation

```bash
npm install whatsapp-typescript-axios
```

## Features

- 🔄 Axios-based HTTP client with TypeScript support
- 📦 Auto-generated from WhatsApp Cloud API specification
- 🎯 Complete type definitions for requests and responses
- 🔒 Type-safe API method calls
- ⚡ Based on official Meta WhatsApp Business Platform API

## API Reference

This HTTP client is generated from an OpenAPI specification based on:

- [WhatsApp Cloud API Documentation](https://developers.facebook.com/docs/whatsapp/cloud-api)
- [WhatsApp Business Platform Postman Collection](https://www.postman.com/meta/whatsapp-business-platform/collection/wlk6lh4/whatsapp-cloud-api)

## Usage

```typescript
import { Configuration, MessagesApi } from 'whatsapp-typescript-axios';

// Basic configuration with access token
const config = new Configuration({
  accessToken: 'your-access-token'
});

// Advanced configuration options
const advancedConfig = new Configuration({
  accessToken: 'your-access-token',
  basePath: 'https://graph.facebook.com/v17.0',  // Optional: override base path
  baseOptions: {                                 // Optional: axios config
    timeout: 5000,
    headers: { 'Custom-Header': 'value' }
  }
});

// Initialize API with phone number ID
const messagesApi = new MessagesApi(config, undefined, 'your-phone-number-id');

// Or initialize without phone number ID
const defaultMessagesApi = new MessagesApi(config);
```

### Configuration Options

The `Configuration` constructor accepts these parameters:
- `accessToken`: Your WhatsApp API access token (required)
- `basePath`: Override the default API base URL (optional)
- `baseOptions`: Additional Axios configuration options (optional)
- Other standard options: `apiKey`, `username`, `password`, etc.

Note: Phone number ID can be provided either during API client initialization or with each API call.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release details.
