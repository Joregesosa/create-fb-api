#!/usr/bin/env node

import degit from "degit";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const projectName = process.argv[2];

if (!projectName) {
  console.error("❌ Debes proporcionar un nombre para el proyecto.");
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectPath = path.join(process.cwd(), projectName);

const emitter = degit("Joregesosa/funbase-api-template", {
  cache: false,
  force: true,
  verbose: true,
});

try {
  console.log("📦 Creando proyecto desde plantilla...");
  await emitter.clone(projectPath);

  console.log("📥 Instalando dependencias...");
  execSync("npm install", { stdio: "inherit", cwd: projectPath });

  console.log(`✅ Proyecto "${projectName}" creado correctamente.`);
} catch (error) {
  console.error("❌ Error:", error.message || error);
  process.exit(1);
}
