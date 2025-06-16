import { defineCollection, z } from 'astro:content';

// Define the schema for planets
const planetsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    planet_id: z.string(),
    name: z.string(),
    scientific_name: z.string(),
    type: z.string(),
    biome: z.string(),
    gravity_source: z.string(),
    nickname: z.string(),
    atmosphere_type: z.string(),
    primary_resources: z.array(z.string()),
    scientific_interest: z.array(z.string()),
    habitability: z.string(),
    year_length_days: z.number(),
    day_length_hours: z.number(),
    description: z.string(),
    claimed_no: z.number().optional(),
    opensea_link: z.string().optional(),
  }),
});

// Define the schema for species
const speciesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    species_id: z.string(),
    name: z.string(),
    scientific_name: z.string().optional(),
    origin: z.string(),
    description: z.string(),
    classification: z.string().optional(),
    habitat: z.string().optional(),
  }),
});

// Define the schema for resources
const resourcesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    resource_id: z.string(),
    name: z.string(),
    type: z.string().optional(),
    origin: z.string(),
    description: z.string(),
    rarity: z.string().optional(),
    uses: z.array(z.string()).optional(),
  }),
});

// Define the schema for relationships
const relationshipsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    relationship_id: z.string(),
    name: z.string(),
    type: z.string().optional(),
    participants: z.array(z.string()).optional(),
    description: z.string(),
  }),
});

// Define the schema for places
const placesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    place_id: z.string(),
    name: z.string(),
    location: z.string(),
    description: z.string(),
    type: z.string().optional(),
    significance: z.string().optional(),
  }),
});

// Define the schema for features (planetary features)
const featuresCollection = defineCollection({
  type: 'content',
  schema: z.object({
    feature_id: z.string(),
    name: z.string(),
    planet: z.string().optional(),
    type: z.string().optional(),
    description: z.string(),
  }),
});

// Define the schema for technology
const technologyCollection = defineCollection({
  type: 'content',
  schema: z.object({
    technology_id: z.string(),
    name: z.string(),
    origin: z.string(),
    description: z.string(),
    type: z.string().optional(),
    complexity: z.string().optional(),
  }),
});

// Define the schema for concepts
const conceptsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    concept_id: z.string(),
    name: z.string(),
    origin: z.string(),
    description: z.string(),
    category: z.string().optional(),
  }),
});

// Define the schema for lore connections
const loreConnectionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    connection_id: z.string(),
    name: z.string(),
    type: z.string().optional(),
    description: z.string(),
    entities: z.array(z.string()).optional(),
  }),
});

// Export the collections
export const collections = {
  'planets': planetsCollection,
  'species': speciesCollection,
  'resources': resourcesCollection,
  'relationships': relationshipsCollection,
  'places': placesCollection,
  'features': featuresCollection,
  'technology': technologyCollection,
  'concepts': conceptsCollection,
  'lore_connections': loreConnectionsCollection,
}; 