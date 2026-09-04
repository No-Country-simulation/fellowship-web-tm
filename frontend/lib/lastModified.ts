import { execFileSync } from "node:child_process";

export function getLastModified(filePath: string): Date {
  try {
    const output = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", filePath],
      { cwd: process.cwd() }
    )
      .toString()
      .trim();
    if (output) return new Date(output);
  } catch {
    // Sin git disponible (build sin historial, shallow clone, etc.)
  }
  return new Date();
}
