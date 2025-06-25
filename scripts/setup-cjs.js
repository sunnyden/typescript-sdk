#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

// Create dist/cjs directory
const cjsDir = path.join(__dirname, "..", "dist", "cjs");
fs.mkdirSync(cjsDir, { recursive: true });

// Create package.json with commonjs type
const packageJson = { type: "commonjs" };
fs.writeFileSync(
  path.join(cjsDir, "package.json"),
  JSON.stringify(packageJson, null, 2)
);

console.log("CJS setup complete");
