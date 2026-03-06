# Bible Reader

## Current State
The app has all 66 books listed in the sidebar but the `bibleData.ts` only contains selected highlight verses -- not every chapter and verse for each book. Most books only have 2-3 chapters with a handful of hand-picked verses, not their complete text.

## Requested Changes (Diff)

### Add
- Fetch the complete KJV Bible (all 66 books, 1,189 chapters, 31,102 verses) from a public domain JSON source at app startup
- Loading state while Bible data is being fetched
- Proper chapter-count structure: each book shows its real chapter count (e.g. Genesis has 50 chapters, Psalms 150, Revelation 22)

### Modify
- Replace static `bibleData.ts` highlight-only data with a dynamic fetch from a public KJV JSON API (bible-api.com or raw GitHub KJV JSON)
- The app shell, sidebar book list, and chapter counts must all reflect the real complete Bible data
- The reader must display every verse in every chapter
- The backend seed data call should use the complete fetched data

### Remove
- The incomplete/partial verse data currently hardcoded in `bibleData.ts`

## Implementation Plan
1. Create a `useBibleData` hook that fetches complete KJV JSON from a reliable public CDN (e.g. `https://cdn.jsdelivr.net/gh/aruljohn/Bible-kjv/Bible.json` or similar)
2. Transform the fetched data into the existing `Book[]` format used throughout the app
3. Show a loading screen while data loads
4. Replace all references to the static `kjvBible` import with the dynamically loaded data
5. Keep the same UI/UX, TTS, search, and navigation -- just replace the data source
