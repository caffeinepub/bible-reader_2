# Bible Reader App

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Full Bible with all 66 books (39 Old Testament, 27 New Testament)
- Book browser: sidebar/list showing all books organized by Testament
- Chapter and verse navigation within each book
- Text-to-speech (TTS) reader that reads the selected passage aloud using the browser's Web Speech API
- Playback controls: Play, Pause, Stop, and reading speed control
- Active verse highlighting while reading
- Persistent reading position (remembers last book/chapter)
- Search functionality to jump to any book/chapter/verse

### Modify
- None (new project)

### Remove
- None (new project)

## Implementation Plan

### Backend
- Store Bible text data: books, chapters, verses
- Provide query methods:
  - Get list of all books (with testament grouping)
  - Get chapters for a book
  - Get verses for a chapter
  - Search verses by keyword
- Seed with full Bible text (KJV - public domain)

### Frontend
- Two-panel layout: left sidebar (book/chapter navigation), right main panel (verse display + TTS controls)
- Book list grouped by Old Testament / New Testament
- Chapter grid selector
- Verse list with highlighted active verse during playback
- TTS controls toolbar: Play/Pause, Stop, speed slider
- Uses browser Web Speech API (SpeechSynthesis) for reading
- Remembers last position in localStorage
- Responsive and mobile-friendly
