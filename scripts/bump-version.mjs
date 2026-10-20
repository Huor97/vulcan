import { execFileSync } from "node:child_process";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const versionTypes = {
  "1": {
    label: "patch - correction de bug",
    value: "patch",
  },
  "2": {
    label: "minor - nouvelle fonctionnalite compatible",
    value: "minor",
  },
  "3": {
    label: "major - changement non retrocompatible",
    value: "major",
  },
  "4": {
    label: "prepatch - prochaine version patch en beta",
    value: "prepatch",
  },
  "5": {
    label: "prerelease - version beta suivante",
    value: "prerelease",
  },
};

const readline = createInterface({ input, output });
const pnpmCommand = process.platform === "win32" ? "pnpm.cmd" : "pnpm";

function run(command, args) {
  execFileSync(command, args, {
    stdio: "inherit",
  });
}

try {
  console.log("\nQuelle version veux-tu publier ?\n");

  for (const [key, version] of Object.entries(versionTypes)) {
    console.log(`${key}. ${version.label}`);
  }

  const choice = await readline.question("\nTon choix : ");
  const selectedVersion = versionTypes[choice.trim()];

  if (!selectedVersion) {
    throw new Error("Choix invalide.");
  }

  const args = [
    "version",
    selectedVersion.value,
    "--message",
    "chore: release v%s",
    "--tag-version-prefix",
    "v",
  ];

  if (
    selectedVersion.value === "prepatch" ||
    selectedVersion.value === "prerelease"
  ) {
    const preid = await readline.question(
      "Identifiant de pre-release [beta] : ",
    );

    args.push("--preid", preid.trim() || "beta");
  }

  console.log(
    `\nCreation de la version ${selectedVersion.value}...\n`,
  );

  run(pnpmCommand, args);

  const push = await readline.question(
    "\nPousser le commit et le tag vers GitHub ? [y/N] ",
  );

  if (push.trim().toLowerCase() === "y") {
    run("git", ["push", "origin", "HEAD", "--follow-tags"]);

    console.log("\nLe commit et le tag ont ete pousses vers GitHub.");
  } else {
    console.log(
      "\nLe commit et le tag sont uniquement en local.\n" +
        "Pour les pousser plus tard :\n" +
        "git push origin HEAD --follow-tags",
    );
  }
} catch (error) {
  console.error(`\nErreur : ${error.message}`);
  process.exitCode = 1;
} finally {
  readline.close();
}
