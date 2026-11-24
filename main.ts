import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The office printer can smell a deadline. Calm all week, it waits until I'm late, prints one page like it's defusing a bomb, then screams PAPER JAM at an empty tray. I add paper. It jams harder, out of spite. It's not a printer. It's a toll booth, and the toll is my last nerve.";

const MAX_CHARS = 400;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`Entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
