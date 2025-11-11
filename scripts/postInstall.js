import { existsSync } from 'fs';
import { execSync } from 'child_process';

const distPath = new URL('../dist/index.js', import.meta.url).pathname;

if (!existsSync(distPath)) {
  console.log('[nuxt-utilities] 🔧 No dist found — running build...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('[nuxt-utilities] ✅ Build completed.');
  } catch (err) {
    console.error('[nuxt-utilities] ❌ Build failed:', err);
  }
} else {
  console.log('[nuxt-utilities] ✅ Using prebuilt dist (no build needed).');
}