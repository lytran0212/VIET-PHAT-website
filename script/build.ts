import { build as viteBuild } from "vite";
import { rm } from "fs/promises";

async function buildClientOnly() {
  await rm("dist", { recursive: true, force: true });
  console.log("building client (static)...");
  await viteBuild();
}

buildClientOnly().catch((err) => {
  console.error(err);
  process.exit(1);
});
