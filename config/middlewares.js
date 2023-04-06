const cors = require('cors');

module.exports = [
  'strapi::errors',
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:'],
            'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
            'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
            upgradeInsecureRequests: null,
          },
        },
        cors: {
          enabled: true,
          headers: '*',
          expose: ['WWW-Authenticate', 'Server-Authorization'],
          methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
          origin: ['http://localhost:3000'], // Reemplace con la URL de su servidor Next.js
        },
      },
      
    },
    
    
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  

];