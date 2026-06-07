import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()

test('hard-coded video content uses local static files', async () => {
  const content = await readFile(path.join(root, 'app/lib/content.ts'), 'utf8')
  const urls = [...content.matchAll(/videoUrl:\s*'([^']+)'/g)].map((match) => match[1])

  assert.ok(urls.length > 0, 'expected hard-coded video URLs')

  for (const url of urls) {
    assert.match(url, /^\/videos\/.+\.mp4$/)
    await access(path.join(root, 'public', url))
  }
})
