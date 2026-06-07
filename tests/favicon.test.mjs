import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()

test('site exposes a branded favicon through metadata', async () => {
  const layout = await readFile(path.join(root, 'app/layout.tsx'), 'utf8')
  const icon = await readFile(path.join(root, 'app/icon.png'))
  const appleIcon = await readFile(path.join(root, 'app/apple-icon.png'))

  assert.match(layout, /icons:\s*\{/)
  assert.match(layout, /icon:\s*'\/icon\.png'/)
  assert.match(layout, /apple:\s*'\/apple-icon\.png'/)
  assert.equal(icon.subarray(1, 4).toString('ascii'), 'PNG')
  assert.equal(appleIcon.subarray(1, 4).toString('ascii'), 'PNG')

  await assert.rejects(stat(path.join(root, 'app/favicon.ico')), { code: 'ENOENT' })
})
