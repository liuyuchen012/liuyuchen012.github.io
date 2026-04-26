import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, 'dist', 'assets')

if (!existsSync(distDir)) {
  console.log('dist/assets not found, skipping postbuild')
  process.exit(0)
}

const files = readdirSync(distDir).filter(f => f.endsWith('.js'))
let fixed = 0

// 找到 node_modules 中 vue-router 的 dist/vue-router.js 的相对路径
// 我们需要知道 vue-router 的实际文件在哪里
function findVueRouterPath() {
  const nmDirs = [
    join(__dirname, 'node_modules', '.pnpm'),
    join(__dirname, 'node_modules'),
  ]
  for (const base of nmDirs) {
    if (!existsSync(base)) continue
    const items = readdirSync(base, { withFileTypes: true })
    for (const item of items) {
      if (item.name.startsWith('vue-router@') || item.name === 'vue-router') {
        const vrDir = join(base, item.name)
        const distDir = join(vrDir, 'dist')
        if (existsSync(distDir)) {
          const files = readdirSync(distDir)
          // Prefer vue-router.mjs (ESM), fallback to vue-router.js
          const esmFile = files.find(f => f.endsWith('.mjs')) 
                      || files.find(f => f === 'vue-router.js')
          if (esmFile) return join(distDir, esmFile)
        }
      }
    }
  }
  return null
}

const vrPath = findVueRouterPath()
if (vrPath) {
  console.log(`Found vue-router at: ${vrPath}`)
  
  // Copy vue-router into dist/assets as a chunk
  const vrContent = readFileSync(vrPath, 'utf-8')
  const vrChunkName = 'chunks/vue-router.js'
  const vrChunkPath = join(distDir, 'chunks', 'vue-router.js')
  
  // Ensure chunks directory exists
  const chunksDir = join(distDir, 'chunks')
  if (!existsSync(chunksDir)) {
    // chunk dir doesn't exist, just put it in assets root
    const flatPath = join(distDir, 'vue-router.js')
    writeFileSync(flatPath, vrContent, 'utf-8')
    console.log('  Copied vue-router to: assets/vue-router.js')
  } else {
    writeFileSync(vrChunkPath, vrContent, 'utf-8')
    console.log('  Copied vue-router to: assets/chunks/vue-router.js')
  }
} else {
  console.log('Warning: Could not find vue-router in node_modules')
}

for (const file of files) {
  const filePath = join(distDir, file)
  let content = readFileSync(filePath, 'utf-8')
  const original = content
  
  // Fix bare module specifiers for vue-router
  // Pattern: from"vue-router" or from "vue-router" or from 'vue-router'
  content = content.replace(
    /from\s*["']vue-router["']/g,
    './vue-router.js"'
  )
  
  if (content !== original) {
    writeFileSync(filePath, content, 'utf-8')
    fixed++
    console.log(`  Fixed vue-router in: ${file}`)
  }
}

// Also fix any files in subdirectories (chunks/)
if (existsSync(join(distDir, 'chunks'))) {
  const chunkFiles = readdirSync(join(distDir, 'chunks')).filter(f => f.endsWith('.js'))
  for (const file of chunkFiles) {
    const filePath = join(distDir, 'chunks', file)
    let content = readFileSync(filePath, 'utf-8')
    const original = content
    content = content.replace(
      /from\s*["']vue-router["']/g,
      '../vue-router.js"'
    )
    if (content !== original) {
      writeFileSync(filePath, content, 'utf-8')
      fixed++
      console.log(`  Fixed vue-router in: chunks/${file}`)
    }
  }
}

// Also fix index.html
const htmlPath = join(__dirname, 'dist', 'index.html')
if (existsSync(htmlPath)) {
  let html = readFileSync(htmlPath, 'utf-8')
  const origHtml = html
  html = html.replace(
    /["']vue-router["']/g,
    '"./vue-router.js"'
  )
  if (html !== origHtml) {
    writeFileSync(htmlPath, html, 'utf-8')
    fixed++
    console.log('  Fixed vue-router in: index.html')
  }
}

console.log(`Postbuild complete: ${fixed} file(s) fixed`)
