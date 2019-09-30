# Rolls Co - Pedidos

## Dependencies
- Node.js: https://nodejs.org
- Firebase: https://firebase.google.com

## Installation
- `npm install`

## Development
- `npm start`

## Deployment
Additional info: https://create-react-app.dev/docs/deployment

- `npm run build`
- `firebase init`

IMPORTANT: set proper HTTP caching headers for service-worker.js file in firebase.json file (issue #2440). It should be added inside "hosting" key like next:
```json
{
  "hosting": {
    "headers": [
      {"source": "/service-worker.js", "headers": [{"key": "Cache-Control", "value": "no-cache"}]}
    ]
  }
}
    ...
```


- `firebase deploy`