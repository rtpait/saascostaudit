#!/usr/bin/env node
const { execSync } = require("child_process");
execSync("npx @11ty/eleventy", { stdio: "inherit", cwd: __dirname + "/.." });
