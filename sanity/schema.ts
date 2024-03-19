import { type SchemaTypeDefinition } from 'sanity'
import projects from './schemas/projects'
import reviews from './schemas/reviews'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, reviews],
}
