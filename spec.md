# Bible Reader

## Current State
A full KJV Bible reader with all 66 books, text-to-speech per chapter with verse highlighting, speed control, search across scriptures, and saved reading position via localStorage.

## Requested Changes (Diff)

### Add
- Share button in the header that copies a shareable URL to the clipboard (or shows a native share sheet on mobile if Web Share API is available)
- URL encodes the current book abbreviation and chapter index as query params (e.g. `?book=joh&chapter=2`)
- On load, read those query params and navigate directly to that passage instead of (or in preference over) the saved position

### Modify
- `App.tsx`: add share button to the header, add URL param reading on mount, update when book/chapter changes (use `history.replaceState` to keep URL in sync without full navigation)

### Remove
- Nothing removed

## Implementation Plan
1. In `App.tsx`, read `?book` and `?chapter` query params on initial load and use them to set the starting position (overriding localStorage when present)
2. Keep the URL in sync with `history.replaceState` whenever the selected book or chapter changes
3. Add a Share button to the header that:
   - On mobile (Web Share API available): calls `navigator.share` with the current URL and a title like "John 3 – Sacred Scripture"
   - On desktop: copies the URL to clipboard and shows a brief "Copied!" toast/badge confirmation
4. Add `Share2` icon from lucide-react for the share button
5. Add `data-ocid="header.share.button"` marker to the share button
