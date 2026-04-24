# Rick and Morty Character Guide

React Native app to browse, search and save Rick and Morty characters.

## How to run

```bash
yarn install
yarn start
```

Scan the QR code with Expo Go to open the app.

## Tech Stack

- **React Native** 0.81 + **Expo** 54
- **TypeScript** 5.9 (strict mode)
- **React Navigation** 7 — bottom tabs
- **TanStack React Query** 5 — API calls and cache
- **RNEUI** 5 — UI components
- **AsyncStorage** — saves favorites locally
- **Axios** — HTTP client

## Folder Structure

```
src/
├── api/          # API client, models, query keys
├── components/   # Shared components (CharacterCard, EmptyState, etc.)
├── lib/          # Theme, React Query setup, favorites context
└── screens/
    ├── home/     # Character list, search, filters
    └── favorites/# Favorites list
```

## What it does

- Shows a list of characters with infinite scroll (starts with 5, loads more (default: 20) as you scroll)
- Search by name (with debounce)
- Filter by status: All, Alive, Dead, Unknown
- Cards change background color based on status (green, red, grey)
- Tap the heart icon to save or unsave a character to favorites
- Favorites are saved locally and persist after closing the app
- Separate Favorites tab to see and manage saved characters
- Pull-to-refresh on the character list
- Shows a message when no results are found

## Scripts

| Command | What it does |
|---------|-------------|
| `yarn start` | Start Expo dev server |
| `yarn ios` | Run on iOS simulator |
| `yarn android` | Run on Android emulator |
| `yarn lint` | Check code with ESLint |
| `yarn lint:fix` | Fix lint errors |
| `yarn format` | Format code with Prettier |

## Trade-offs decisions

- **React Context for favorites** - only favorites need to be shared between screens, so a full state library (Redux, Zustand) was not needed.
- **Client-side slicing for the first 20 items** - the API always returns 20 per page, but the requirement is to show 5 at a time. So the app loads 20 from the API and shows them in groups of 5. After the first 20, it loads full pages normally.
- **Saving full Character objects in favorites** - this way the Favorites screen doesn't need extra API calls to show the cards. The data is small so storage is not a problem.
