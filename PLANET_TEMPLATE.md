# Planet Markdown Template & Style Guide

This guide ensures consistent formatting when creating new planet files for the Distant Worlds collection.

## File Naming Convention
- Format: `world_XXX_planet-name.md`
- Examples: `world_001_aetheris.md`, `world_004_nexus-prime.md`
- Use lowercase, replace spaces with hyphens
- Include 3-digit zero-padded planet ID

## Required Frontmatter Structure

```yaml
---
planet_id: 001
name: Planet Name
scientific_name: Scientific Designation
type: Planet Classification
biome: Primary Environment Type
gravity_source: Gravity Mechanism Description
nickname: Common Names, Alternate Designations
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
year_length_days: 365
day_length_hours: 24.0
description: "Brief, compelling one-sentence description for social media and quick reference."
---
```

## Required Section Structure

### 1. Description Section
```markdown
## Description (for reels & quick viewing)
[Brief, engaging description matching the frontmatter description field. 1-2 sentences max. Focus on visual impact and intrigue.]

---
```

### 2. Lore Section
```markdown
## Lore (for posts)
[Medium-length narrative content, 3-5 paragraphs. Include:
- Hook opening line
- Key environmental features
- Alien civilizations (if any)
- Human perspective/relationship
- Compelling mysteries or conflicts]

---
```

### 3. Extended Lore Section
```markdown
## Extended Lore (worldbuilding & deeper reading)
[Detailed worldbuilding content, 4-7 paragraphs. Include:
- Historical context
- Scientific explanations
- Cultural details of alien species
- Connections to other worlds/galaxy
- Unresolved mysteries
- Human expedition reports
- Theoretical implications]
```

## Content Guidelines

### Frontmatter Field Explanations

- **planet_id**: 3-digit number (001, 002, etc.)
- **name**: Primary planet designation (proper noun)
- **scientific_name**: Formal scientific classification (often Latin-esque)
- **type**: Geological/structural classification (e.g., "Dense Desert Terrestrial", "Hollow-Core Terrestrial")
- **biome**: Primary environmental zone (e.g., "Storm-Carved Crystalline Tundra")
- **gravity_source**: What creates the planet's gravity (standard core, artificial systems, etc.)
- **nickname**: Common names used by various species
- **atmosphere_type**: Detailed atmospheric composition and characteristics
- **primary_resources**: 3-4 key materials/resources found on planet
- **scientific_interest**: 3-4 research areas of particular note
- **habitability**: Detailed assessment of livability for various species
- **year_length_days**: Orbital period in standard days
- **day_length_hours**: Rotation period in standard hours
- **description**: One compelling sentence for social media use

### Writing Style Guidelines

#### Tone & Voice
- **Mysterious yet scientific**: Balance wonder with technical plausibility
- **Human perspective**: Often include human reactions/expeditions
- **Escalating revelation**: Start accessible, build to complex concepts
- **Subtle horror**: Many worlds should have unsettling elements

#### Content Structure
1. **Hook**: Start each section with an intriguing opening
2. **Visual details**: Emphasize colors, scale, movement
3. **Alien civilizations**: Most planets should have unique species
4. **Human element**: Include human expeditions, reactions, theories
5. **Mysteries**: Leave questions unanswered, build intrigue

#### Technical Details
- Include specific measurements (gravity, atmospheric pressure, etc.)
- Use consistent terminology across planets
- Reference realistic physics when possible
- Create connections between different worlds

### Example Phrases & Patterns

#### Strong Opening Lines
- "On [Planet], [impossible thing] [happens/exists]..."
- "[Planet] shouldn't [do/be something], but it does anyway..."
- "[Planet] is [contradictory description]..."

#### Description Patterns
- Focus on ONE striking visual or concept
- Use em-dashes for dramatic pauses
- Include colors and motion
- End with intrigue or mystery

#### Lore Patterns
- Environmental description → Alien civilization → Human reaction → Mystery
- Start with sensory details, build to implications
- Include specific alien species names and abilities
- End with unresolved questions

### Quality Checklist

Before publishing, ensure each planet has:

- [ ] Complete frontmatter with all required fields
- [ ] Consistent section headers and structure
- [ ] Unique alien civilization (if inhabited)
- [ ] Human expedition/reaction element
- [ ] Specific technical details
- [ ] Unresolved mysteries or questions
- [ ] Consistent tone with existing planets
- [ ] Proofread for grammar and consistency
- [ ] Description field matches Description section
- [ ] Scientific name follows consistent format

### Common Pitfalls to Avoid

- **Don't** make planets too similar to Earth
- **Don't** resolve all mysteries completely
- **Don't** ignore the human element
- **Don't** skip technical/scientific details
- **Don't** make aliens too anthropomorphic
- **Don't** forget to proofread frontmatter YAML syntax
- **Don't** use inconsistent terminology between sections

## File Management

- Save all planet files in `src/content/` directory
- Use consistent naming: `world_XXX_planet-name.md`
- Increment planet_id sequentially
- Test frontmatter parsing before publishing
- Maintain backup copies of work-in-progress planets

## Need Help?

Refer to existing planets for examples:
- `world_001_aetheris.md` - Hollow planet with graviton core
- `world_002_solithar.md` - Desert world with light-based civilization  
- `world_003_calyx_vehl.md` - Frozen world with sonic civilization
- `world_004_ferraxis.md` - Volcanic world with tectonic life
- `world_005_thallasos.md` - Ocean world with deep-sea organisms
- `world_006_KIII09-2-0808.md` - Gas giant with atmospheric ecosystems

This template ensures consistency while allowing creative freedom within the established format. 