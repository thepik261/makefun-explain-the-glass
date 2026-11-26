// Five Seconds to Explain the Glass — the house cat's defence, in its own voice.
// Pure Node stdlib, deterministic: writes one sentence (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "That glass was squatting in my sunbeam and failing its vibe check, and as this household's chief quality-control officer I am contractually obliged to remove it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE.trim() + "\n", "utf8");
