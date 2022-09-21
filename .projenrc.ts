import { awscdk, javascript } from "projen";
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: "2.1.0",
  defaultReleaseBranch: "main",
  name: "projen-sample",
  packageManager: javascript.NodePackageManager.NPM,
  projenrcTs: true,
  gitignore: [".idea"],
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
    },
  },

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
