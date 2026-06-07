import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()

test('header uses the recovered CMS logo asset', async () => {
  const content = await readFile(path.join(root, 'app/lib/content.ts'), 'utf8')
  const header = await readFile(path.join(root, 'app/components/Header.tsx'), 'utf8')
  const logoPath = path.join(root, 'public/brand/logo.jpg')
  const logo = await readFile(logoPath)
  const info = await stat(logoPath)

  assert.match(content, /logoUrl:\s*'\/brand\/logo\.jpg'/)
  assert.match(header, /width=\{500\}/)
  assert.match(header, /height=\{329\}/)
  assert.match(header, /h-10/)
  assert.equal(logo.subarray(0, 2).toString('hex'), 'ffd8')
  assert.ok(info.size > 1024, 'logo should be a real downloaded image')
})
