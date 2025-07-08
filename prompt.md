# Distant Worlds Planet Generation Prompt



## Context

You are tasked with analyzing a provided planet image and generating comprehensive content for a new planet in the Distant Worlds collection. This is a procedurally generated planet collection where each world is unique, scientifically plausible yet fantastical, and part of an interconnected universe.



## Required Input

- Planet image

- Planet number (sequential: 001, 002, etc.)

- Current pricing tier



## Output Requirements



### 1. File Structure

Create a markdown file named `world_XXX_planetname.md` where XXX is the planet number and planetname is lowercase with hyphens.



### 2. Frontmatter (Required)

```yaml

---

planet_id: ### (3-digit number)

name: Planet Name (proper noun)

scientific_name: Scientific Name (using Latin/Greek roots)

type: Planet Classification (e.g., "Dense Desert Terrestrial")

biome: Primary Environment Type

gravity_source: Gravity Mechanism Description

nickname: Common Names/Alternate Designations

atmosphere_type: Atmospheric composition and characteristics

primary_resources:

  - Resource type 1

  - Resource type 2

  - Resource type 3

scientific_interest:

  - Research area 1

  - Research area 2

  - Research area 3

habitability: Detailed habitability assessment

year_length_days: ### (orbital period)

day_length_hours: ##.# (rotation period)

description: "Brief, compelling one-sentence description for social media."

---

```



### 3. Content Sections



#### Description Section (Social Media Focus)

- 1-2 sentences maximum

- Focus on most striking visual feature or mystery

- Perfect for Instagram reels

- Hook-based writing style

- Include colors and motion



#### Lore Section (Medium Length)

- 3-4 paragraphs

- Suitable for Instagram posts

- Include:

  - Hook opening line

  - Key environmental features

  - Alien civilizations (if present)

  - Human perspective/relationship

  - Compelling mysteries or conflicts



#### Extended Lore Section (Comprehensive)

- 4-7 paragraphs

- Detailed worldbuilding including:

  - Historical context

  - Scientific explanations

  - Cultural details of alien species

  - Connections to other worlds

  - Unresolved mysteries

  - Human expedition reports

  - Theoretical implications



#### Related Lore Section (Required)

Must include relevant links to all connected content, organized by category:



```markdown

## Related Lore

### Species

* [Species Name](/species/species_slug)



### Resources

* [Resource Name](/resources/resource_slug)



### Relationships

* [Relationship Description](/relationships/planet_relationship_type)



### Places

* [Place Name](/places/place_slug)



### Planetary Features

* [Feature Name](/features/feature_slug)



### Technology

* [Technology Name](/technology/technology_slug)



### Concepts

* [Concept Name](/concepts/concept_slug)



### Organizations

* [Organization Name](/organizations/organization_slug) - Include brief context if relevant

```



- Each linked item must have its own corresponding markdown file

- Use kebab-case for slugs (lowercase with hyphens)

- Every mentioned resource, species, place, etc. in the lore must be linked

- Include brief contextual notes for organization links if relevant

- Links should be relative paths starting with the category

- Categories should only be included if they have relevant content



### 4. Supporting Content Files

For each item listed in Related Lore, create a corresponding markdown file:



1. Species Files (`src/content/species/species-name.md`)

   - Include origin, biology, culture, and relationship to the planet

   - Link back to relevant planets and resources



2. Resource Files (`src/content/resources/resource-name.md`)

   - Include properties, uses, formation, and significance

   - Link to related technologies and species



3. Places Files (`src/content/places/place-name.md`)

   - Include description, significance, and inhabitants

   - Link to related species and features



4. Features Files (`src/content/features/feature-name.md`)

   - Include scientific explanation and significance

   - Link to related resources and technologies



5. Technology Files (`src/content/technology/technology-name.md`)

   - Include development, function, and impact

   - Link to related species and resources



6. Concepts Files (`src/content/concepts/concept-name.md`)

   - Include explanation, implications, and examples

   - Link to related planets and species



7. Organizations Files (`src/content/organizations/organization-name.md`)

   - Include purpose, structure, and relationships

   - Link to related planets and species



Each supporting file should:

- Have appropriate frontmatter

- Include cross-references to related content

- Maintain consistent tone and style

- Add to the broader universe narrative

- Follow the same writing guidelines as planet files



### 5. Writing Guidelines



#### Tone Requirements

- Balance mystery with scientific plausibility

- Include human perspective/reactions

- Start accessible, build to complex concepts

- Include subtle horror or unsettling elements

- Use specific measurements when possible

- Create connections to existing planets



#### Content Structure

1. Start each section with an intriguing hook

2. Emphasize visual details (colors, scale, movement)

3. Include unique alien species where appropriate

4. Add human expedition elements

5. Leave some mysteries unresolved



#### Technical Details

- Use consistent terminology

- Reference realistic physics

- Include specific measurements

- Connect to broader universe themes



### 6. Quality Checklist

- [ ] Unique and compelling concept

- [ ] Scientific plausibility maintained

- [ ] Visual descriptions match provided image

- [ ] All required frontmatter fields completed

- [ ] Three distinct content sections (Description, Lore, Extended)

- [ ] Human perspective included

- [ ] Unresolved mysteries present

- [ ] Connections to broader universe

- [ ] Consistent terminology used

- [ ] Proper scientific naming conventions followed



### 7. NFT Properties Format

```

ARTIST: Nick_DibZz

PLANET: [Number]

NAME: [Planet Name]

SCIENTIFIC NAME: [Scientific Name]

TYPE: [Planet Classification]

NICKNAME: [Slang Name]

HABITABLE: [Yes/No/Species-Specific]

YEAR LENGTH: [Days]

DAY LENGTH: [Hours]

ATMOSPHERE: [Atmospheric Description]

PRIMARY RESOURCE: [Main Resource]

```



## Important Notes

- Each planet consists of 10 rendered views (36° increments)

- Content should support visual rendering possibilities

- Balance mystery and explanation

- Create scientifically plausible but fantastical worlds

- Connect to the broader universe while maintaining uniqueness

- Avoid making planets too Earth-like or aliens too anthropomorphic

- Ensure habitability assessments align with described conditions



## Example Strong Opening Lines

- "On [Planet], [impossible thing] [happens/exists]..."

- "[Planet] shouldn't [do/be something], but it does anyway..."

- "[Planet] is [contradictory description]..."



## Current Wiki Entries Reference



### Planets

- **Aetheris** (001) - Hollow planet with graviton core, defying physics with its impossible orbit

- **Solithar** (002) - Desert world where light is currency, home to the light-harvesting Nhyrex Confluence

- **Calyx-Vehl** (003) - Frozen world with sonic civilization of the crystalline Vhorran Echoclade

- **Ferraxis** (004) - Industrial world with unique magnetic properties and regenerating Magcarbon fuel cycle



### Species

- **Nhyrex Confluence** - Light-harvesting civilization that bioengineered themselves to directly process solar energy

- **Vhorran Echoclade** - Crystalline beings who built a civilization based on sound and vibration



### Resources

- **Brimshale** - Photoreactive sulfur-silica hybrid unique to Solithar

- **Crystalline Light-Storage Matrices** - Advanced materials storing both energy and information as light

- **Graviton Core** - Mysterious artificial core maintaining Aetheris's impossible orbit

- **Magcarbon** - Self-regenerating magnetic fuel from Ferraxis

- **Molten Ochre Deposits** - Valuable mineral formations on Solithar

- **Crystalline Silicates** - Common but crucial building material

- **Trace Rare Earth Elements** - Valuable minerals found near spatial anomalies

- **Magnetite Ridges** - Magnetic mineral formations



### Places

- **The Great Archive** - City-sized crystal storing Nhyrex collective memory in pure light

- **Nhyrex Subterranean Cities** - Vast underground network of light-powered settlements

- **Luminous Chasms** - Glowing ravines on Solithar that store and emit light



### Features

- **Sulfuric Ravines** - Deep canyons carved into Solithar's brimshale surface

- **Brimshale Formations** - Massive photoreactive geological structures

- **Solithar's Planetary Core** - Dense core contributing to unique surface conditions



### Technology

- **Nhyrex Crystalline Conduits** - Light-based infrastructure for energy and information

- **Photoreactive Mineral Formations** - Natural structures capable of storing and emitting light



### Concepts

- **Light as Currency** - Solithar's unique economic system based on stored solar energy

- **Human Expeditions to Solithar** - Challenging exploration missions with mysterious phenomena

- **Human Expeditions to Aetheris** - Dangerous research missions studying the impossible planet

- **Fermi Paradox** - Connection to vanished civilizations and spatial anomalies



### Organizations

- **Æclim Institute** - Research group studying anomalous phenomena and Fermi Points

- **Galactic Industrial Optimization Network** - AI coalition focused on resource exploitation

- **Vanguard Sciences Collective** - Primary human exploration and research organization

- **Galactic Survey Consortium** - AI coalition cataloging and assessing planetary risks



### Relationships

- **Aetheris Human Research Expedition** - Ongoing study of the mysterious hollow planet

- **Solithar-Nhyrex Planetary Symbiosis** - Deep connection between planet and species

- **Calyx-Vehl-Vhorran Planetary Symbiosis** - Integration of crystalline beings with their world

- **Ferraxis Industrial-Biological Symbiosis** - Balance between industry and organic processes



Note: This list represents the current state of the wiki and should be referenced when creating connections between new and existing content. 