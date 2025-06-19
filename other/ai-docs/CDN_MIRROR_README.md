# CDN Mirror Implementation

This document describes the CDN mirror functionality that proxies requests from `https://ptbk.io/files/` to `https://collboard.fra1.cdn.digitaloceanspaces.com/ptbk/`.

## Overview

The CDN mirror allows files hosted on the DigitalOcean Spaces CDN to be accessed through the PTBK domain, providing a unified access point for all resources.

## URL Mapping

| Original CDN | Mirror URL |
|--------------|------------|
| `https://collboard.fra1.cdn.digitaloceanspaces.com/ptbk/[path]` | `https://ptbk.io/files/[path]` |

### Example

- **Original**: `https://collboard.fra1.cdn.digitaloceanspaces.com/ptbk/user/knowledge-source/d/1/ao-f-final.pdf`
- **Mirror**: `https://ptbk.io/files/user/knowledge-source/d/1/ao-f-final.pdf`

## Implementation

The mirror is implemented as a Next.js API route located at:
```
src/app/api/files/[...path]/route.ts
```

### Features

- **Streaming**: Files are streamed directly from the original CDN without buffering
- **Header Preservation**: Important headers (content-type, cache-control, etc.) are preserved
- **CORS Support**: Cross-origin requests are supported with appropriate headers
- **Error Handling**: Proper HTTP status codes for missing files and errors
- **Caching**: Optimized caching headers for better performance
- **Multiple HTTP Methods**: Supports GET, HEAD, and OPTIONS requests

### Supported HTTP Methods

#### GET
- Streams the file content from the original CDN
- Preserves all relevant headers
- Returns appropriate error codes for missing files

#### HEAD
- Returns headers without body content
- Useful for checking file existence and metadata

#### OPTIONS
- Handles CORS preflight requests
- Returns appropriate CORS headers

## Configuration

The CDN base URL is configured in the route file:
```typescript
const CDN_BASE_URL = 'https://collboard.fra1.cdn.digitaloceanspaces.com/ptbk';
```

## Testing

A test page is available at `/cdn-test` that demonstrates the mirror functionality and provides examples of how to use it.

## Performance Considerations

- Files are streamed directly without server-side caching to minimize memory usage
- Appropriate cache headers are set for client-side and CDN caching
- The mirror adds minimal latency as it's a simple proxy

## Error Handling

- **404 Not Found**: When the original file doesn't exist
- **403 Forbidden**: When access to the original file is denied
- **500 Internal Server Error**: For network or other unexpected errors

## Security

- No authentication is required (mirrors the original CDN behavior)
- CORS headers allow cross-origin access
- No file modification or upload capabilities

## Monitoring

The implementation includes console logging for:
- Successful proxy requests
- Failed requests with status codes
- Error conditions

## Deployment Notes

When deploying to production:
1. Ensure the Next.js application is properly configured
2. Verify that outbound HTTPS requests are allowed
3. Monitor the logs for any proxy errors
4. Consider implementing rate limiting if needed

## Usage Examples

### Direct File Access
```html
<a href="https://ptbk.io/files/user/knowledge-source/d/1/ao-f-final.pdf">
  Download PDF
</a>
```

### Image Embedding
```html
<img src="https://ptbk.io/files/images/example.jpg" alt="Example Image" />
```

### JavaScript Fetch
```javascript
fetch('https://ptbk.io/files/data/example.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

## Maintenance

- Monitor CDN usage and performance
- Update the base URL if the original CDN location changes
- Review and update caching policies as needed
- Monitor for any breaking changes in the original CDN
