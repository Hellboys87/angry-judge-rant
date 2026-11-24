import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The office printer only jams when I'm already late, printing one page like it's defusing a bomb, then flashing PAPER JAM for a tray that's emptier than my motivation on Monday. I feed it paper, it eats my dignity. We don't have a printer. We have a toll booth that charges in panic.";

const MAX_CHARS = 400;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`Entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
