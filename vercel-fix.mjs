// vercel-fix.mjs
import fs from 'fs';
import path from 'path';
import url from 'url';

const rollupPath = path.resolve('node_modules/rollup/dist/native.js');
if (fs.existsSync(rollupPath)) {
  let code = fs.readFileSync(rollupPath, 'utf8');
  if (code.includes('@rollup/rollup-linux-x64-gnu')) {
    code = code.replace(
      /requireWithFriendlyError\(.*?\)/g,
      'throw new Error("Skipping native Rollup binary on Vercel")'
    );
    fs.writeFileSync(rollupPath, code, 'utf8');
    console.log('✅ Rollup native import bypassed for Vercel.');
  } else {
    console.log('ℹ️ Rollup native bypass already applied.');
  }
} else {
  console.log('⚠️ Rollup native.js not found — skipping fix.');
}
