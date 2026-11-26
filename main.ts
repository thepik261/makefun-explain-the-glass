// Five Seconds to Explain the Glass — the house cat's defence, in its own voice.
// Pure Node stdlib, deterministic: writes one sentence (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "That glass was squatting in my sunbeam and failing its vibe check, so as this household's chief quality-control officer I had it removed.";

const text = LINE.trim();
// Runtime validation: gate requires 1-200 chars of non-whitespace UTF-8 text.
if (text.length < 1 || text.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${text.length}`);
}
if (!text.endsWith(".") || text.slice(0, -1).includes(".")) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text + "\n", "utf8");
