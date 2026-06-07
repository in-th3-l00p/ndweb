import assert from 'node:assert/strict'
import { access, readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()

test('hero uses optimized local 16:9 video with instant poster', async () => {
  const content = await readFile(path.join(root, 'app/lib/content.ts'), 'utf8')
  const hero = await readFile(path.join(root, 'app/components/Hero.tsx'), 'utf8')

  assert.match(content, /videoUrl:\s*'\/videos\/hero-final-sample\.mp4'/)
  assert.match(content, /posterUrl:\s*'\/videos\/posters\/hero-final-sample\.jpg'/)
  assert.match(hero, /poster=\{posterUrl\}/)
  assert.match(hero, /preload="metadata"/)
  assert.match(hero, /aspect-video/)
  assert.doesNotMatch(hero, /viewBox="0 0 366 729"/)

  const videoPath = path.join(root, 'public/videos/hero-final-sample.mp4')
  const posterPath = path.join(root, 'public/videos/posters/hero-final-sample.jpg')
  await access(videoPath)
  await access(posterPath)

  const videoInfo = await stat(videoPath)
  assert.ok(videoInfo.size < 12 * 1024 * 1024, 'hero video should stay small enough for fast first view')
})
