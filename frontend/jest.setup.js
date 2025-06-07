import 'whatwg-fetch';

// Patch for React Router DOM dependencies in Node.js
const { TextEncoder, TextDecoder } = require('util');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
