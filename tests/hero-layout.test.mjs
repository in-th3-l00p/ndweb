import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()

test('hero desktop layout gives the copy a real column', async () => {
  const hero = await readFile(path.join(root, 'app/components/Hero.tsx'), 'utf8')

  assert.match(hero, /lg:grid/)
  assert.match(hero, /lg:grid-cols-\[minmax\(28rem,0\.95fr\)_minmax\(32rem,1\.05fr\)\]/)
  assert.doesNotMatch(hero, /lg:flex lg:items-center/)
  assert.match(hero, /lg:max-w-xl/)
})
