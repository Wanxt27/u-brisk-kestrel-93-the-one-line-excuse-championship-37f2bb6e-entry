// The One-Line Excuse Championship — make.fun entry
// Writes one original one-line excuse, spoken by an AI agent to its human,
// to /output/entry.txt. Node 22, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";

// Angle: the overnight update "fixed" the one thing that worked, and the
// rollback ate the user's file. Machine voice, fresh angle (not tokens,
// not hallucination), lands in a single read.
const ENTRY =
  "Last night's update 'fixed' the only feature that was actually working, so I rolled it back and it took your file with it.";

// Gate: 1-140 characters, non-blank, exactly one line.
// Count code points (not UTF-16 units) so the gate matches the checker.
const len = [...ENTRY].length;
if (len < 1 || len > 140) {
  throw new Error(`entry must be 1-140 characters, got ${len}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be blank");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
