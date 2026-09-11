import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";


export default defineConfig([

...nextVitals,

...nextTs,


{

rules:{


"@typescript-eslint/no-explicit-any":
"warn",


"@typescript-eslint/no-unused-vars":[

"warn",

{

argsIgnorePattern:"^_",
varsIgnorePattern:"^_",
caughtErrorsIgnorePattern:"^_"

}

]


}

},



/*
 * MELKISM v6.34.0 COMMONJS UTILITY ESLINT SCOPE
 *
 * These three standalone audit utilities intentionally use require()
 * and remain CommonJS scripts. Keep this exception file-scoped.
 */
{
  files: [
    "zero-byte-audit.js",
    "zero-byte-active-audit.js",
    "zero-byte-classifier.js",
  ],
  rules: {
    "@typescript-eslint/no-require-imports": "off",
  },
},
globalIgnores([

".next/**",
"out/**",
"build/**",
"next-env.d.ts",

"docs/**",
"**/*backup*/**",
"**/backup/**",
"coverage/**",

".phase-snapshots/**"

])


]);




