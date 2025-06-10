# Astro Project Implementation

This project uses Astro to display procedurally generated planet data from markdown files. Each planet's data is stored in a separate markdown file within the `content` directory, following a predefined structure.

## Project Structure

- `content/`: This directory contains all the markdown files for the planets. Each file is named `world_###_planetname.md`.
- `src/pages/`: This directory will contain Astro pages to render the planet cards.
- `public/`: For static assets like images.

## Data Flow

1. Markdown files in `content/` are parsed by Astro.
2. Data from the markdown files is used to dynamically generate planet cards.
3. Each planet card will display key information such as name, type, biome, and a brief description.

## Future Enhancements

- Implement dynamic routing for individual planet pages.
- Add filtering and sorting options for planet cards.
- Integrate with a proper data fetching mechanism if the number of planets grows significantly. 