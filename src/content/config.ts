import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { feedLoader } from '@ascorbic/feed-loader'
import { githubReleasesLoader } from 'astro-loader-github-releases'
import { pageSchema, postSchema, projectsSchema, streamsSchema } from './schema'

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/pages' }),
  schema: pageSchema,
})

const blog = defineCollection({
  type: 'content',
  schema: postSchema,
})

const projects = defineCollection({
  type: 'data',
  schema: projectsSchema,
})

const changelog = defineCollection({
  type: 'content',
  schema: postSchema,
})

export const collections = {
  pages,
  blog,
  projects,
  changelog
}
