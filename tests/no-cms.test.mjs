import assert from 'node:assert/strict'
import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()
const ignored = new Set(['.env', '.git', '.next', 'node_modules', 'package-lock.json'])
const blockedPatterns = [
  /@sanity\b/i,
  /\bsanity\b/i,
  /\bnext-sanity\b/i,
  /\bgroq\b/i,
  /\bSANITY_/,
  /\bNEXT_PUBLIC_SANITY_/,
]

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    if (ignored.has(entry.name)) continue

    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      files.push(...await collectFiles(fullPath))
      continue
    }

    if (!entry.isFile()) continue

    const info = await stat(fullPath)
    if (info.size > 1024 * 1024) continue

    files.push(fullPath)
  }

  return files
}

test('website source is decoupled from external CMS code', async () => {
  const files = await collectFiles(root)
  const offenders = []

  for (const file of files) {
    if (file.endsWith('tests/no-cms.test.mjs')) continue

    const contents = await readFile(file, 'utf8')
    const matched = blockedPatterns.some((pattern) => pattern.test(contents))

    if (matched) {
      offenders.push(path.relative(root, file))
    }
  }

  assert.deepEqual(offenders.sort(), [])
})
