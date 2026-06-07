import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()

test('portfolio player uses mobile-friendly loading and controls', async () => {
  const component = await readFile(path.join(root, 'app/components/Portfolio.tsx'), 'utf8')
  const content = await readFile(path.join(root, 'app/lib/content.ts'), 'utf8')
  const posterUrls = [...content.matchAll(/posterUrl:\s*'([^']+)'/g)].map((match) => match[1])

  assert.ok(posterUrls.length > 0, 'expected poster URLs for portfolio videos')
  assert.doesNotMatch(component, /preload="auto"/)
  assert.doesNotMatch(component, /\bautoPlay\b/)
  assert.doesNotMatch(component, /md:hidden|hidden md:grid/)
  assert.match(component, /preload="metadata"/)
  assert.match(component, /\bcontrols\b/)
  assert.match(component, /poster=\{video\.posterUrl\}/)

  for (const url of posterUrls) {
    assert.match(url, /^\/videos\/posters\/.+\.jpg$/)
    await access(path.join(root, 'public', url))
  }
})
