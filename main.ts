// One Emoji, One Dream Vacation — entry program.
//
// Writes exactly one emoji to /output/entry.txt: Mount Fuji (U+1F5FB).
// The emoji is the whole entry: no words, no newline, no extra bytes.

import { mkdirSync, writeFileSync } from "node:fs";

// U+1F5FB MOUNT FUJI — one code point, one grapheme, four UTF-8 bytes.
// A snow-capped mountain at dawn: the postcard of one particular dream,
// a trip to Japan, specific enough to be a single dream and plain enough
// to read at any size, on any screen, in any culture.
const ENTRY = "🗻";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
