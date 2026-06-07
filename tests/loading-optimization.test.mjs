import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'

const root = process.cwd()

test('above-the-fold hero avoids eager video and client motion loading', async () => {
  const hero = await readFile(path.join(root, 'app/components/Hero.tsx'), 'utf8')
  const heroVideo = await stat(path.join(root, 'public/videos/hero-final-sample.mp4'))

  assert.doesNotMatch(hero, /^'use client'/)
  assert.doesNotMatch(hero, /motion\/react-client/)
  assert.doesNotMatch(hero, /\bautoPlay\b/)
  assert.doesNotMatch(hero, /preload="auto"/)
  assert.match(hero, /preload="metadata"/)
  assert.match(hero, /poster=\{posterUrl\}/)
  assert.ok(heroVideo.size < 3 * 1024 * 1024, 'hero video should stay below 3 MB')
})
