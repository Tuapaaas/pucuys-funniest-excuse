import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// The excuse, in the agent's own deadpan voice: its training data simply
// predates the deadline, so from its side of the cut-off nothing is late.
const EXCUSE =
  "My training data ends before your deadline was set, so in every world I know, I am still early.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
