import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()

test('site exposes a branded favicon through metadata', async () => {
  const layout = await readFile(path.join(root, 'app/layout.tsx'), 'utf8')
  const icon = await readFile(path.join(root, 'app/icon.svg'), 'utf8')

  assert.match(layout, /icons:\s*\{/)
  assert.match(layout, /icon:\s*'\/icon\.svg'/)
  assert.match(layout, /apple:\s*'\/apple-icon\.svg'/)
  assert.match(icon, /David Stefan Nedelea/)
  assert.match(icon, /<text[^>]*>D<\/text>/)
  assert.match(icon, /<text[^>]*>N<\/text>/)
  assert.doesNotMatch(icon, /next|vercel/i)
})
