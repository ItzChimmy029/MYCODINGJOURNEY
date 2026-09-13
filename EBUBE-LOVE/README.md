# EBUBE // LOVE.EXE

A cinematic, interactive love experience made by Justice for Ugwu Ebube Miracle.

## Run it

Open `index.html` directly in a browser, or use VS Code's Live Server extension. No build process, backend, database, or package installation is required.

## Personalize it

Open `script.js` and edit the `CONFIG` object near the top. You can change the recipient, sender, photo path, music path, and feature switches. The private letter is stored in the `LOVE_MESSAGE` variable immediately below it.

To add a photo, place it in `assets/images/`, then set for example:

```js
photoPath: 'assets/images/our-photo.jpg'
```

To add music, place an audio file in `assets/audio/`, then update `musicPath`. Music intentionally starts only after the visitor presses the music control because browsers block unsolicited audio.

## Included experience

- Cinematic private loading sequence
- Eight scroll-based scenes
- Responsive constellation with mouse and touch-friendly nodes
- Canvas heart with particle edge movement and click explosion
- Love metric display
- Locked typewriter letter
- Optional photo memory frame
- Optional music toggle
- Custom desktop cursor
- Reduced-motion support
- No external JavaScript dependencies
