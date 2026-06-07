import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()

test('social links use only the provided real links', async () => {
  const content = await readFile(path.join(root, 'app/lib/content.ts'), 'utf8')
  const urls = [...content.matchAll(/url:\s*'([^']+)'/g)].map((match) => match[1])
  const socialUrls = urls.filter((url) => {
    return url.includes('tiktok.com')
      || url.includes('instagram.com')
      || url.startsWith('mailto:')
      || url.includes('linkedin.com')
      || url.includes('fiverr.com')
      || url.includes('cal.com')
      || url.includes('youtube.com')
  })

  assert.deepEqual(socialUrls.sort(), [
    'https://www.instagram.com/_david.stefan_?igsh=MXNxMHhjZHd5YnZmbQ%3D%3D&utm_source=qr',
    'https://www.tiktok.com/@davidmotiveaza?_r=1&_t=ZN-9713OUO2TMU',
    'mailto:nedeleadavid22@yahoo.com',
  ].sort())

  assert.doesNotMatch(content, /davidnedelea|linkedin|fiverr|cal\.com|youtube/i)
})
