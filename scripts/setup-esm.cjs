#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Create dist/esm directory
const esmDir = path.join(__dirname, '..', 'dist', 'esm');
fs.mkdirSync(esmDir, { recursive: true });

// Create package.json with module type
const packageJson = { type: 'module' };
fs.writeFileSync(
  path.join(esmDir, 'package.json'),
  JSON.stringify(packageJson, null, 2)
);

console.log('ESM setup complete');
