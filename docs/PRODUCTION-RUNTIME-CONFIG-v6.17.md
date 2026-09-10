# MELKISM v6.17 — Production Runtime & Environment Configuration

## Purpose

v6.17 establishes the production runtime and environment configuration
contract for MELKISM.

The phase verifies:

- production package scripts
- environment-file hygiene
- Git tracking hygiene
- environment variable references
- browser exposure boundaries
- Node and npm runtime visibility
- production build
- production server startup
- runtime HTTP availability
- absence of secret values in tracked source files

## Security policy

Environment values are never written to the generated report.

The browser-facing boundary is the `NEXT_PUBLIC_` convention.

Secret-bearing variables must remain server-side.

The audit does not modify existing environment values.

## Environment files

Allowed template files include:

- `.env.example`
- `.env.template`

Sensitive local environment files are not expected to be tracked by Git.

## Production scripts

The project must expose:

- `npm run build`
- `npm run start`

The production server must be able to start successfully.

## Runtime verification

The validation sequence is:

1. Verify project root.
2. Verify Git repository.
3. Verify package.json.
4. Verify build/start scripts.
5. Verify `.gitignore`.
6. Inspect environment references.
7. Generate environment contract documentation.
8. Audit tracked files for secret patterns.
9. Run TypeScript.
10. Run ESLint.
11. Run production build.
12. Start the production server.
13. Verify production HTTP availability.
14. Generate the audit report.
15. Stop the temporary production server.

## Safety

The phase refuses to overwrite existing v6.17 source files.

The phase never prints values from `.env` files.

The phase never copies secret values into generated documentation.

The phase does not change `next.config.ts`.

## Completion criteria

v6.17 is complete only when:

- TypeScript passes.
- ESLint passes.
- Production build passes.
- production server starts.
- production HTTP endpoint is reachable.
- required package scripts exist.
- sensitive environment files are not tracked.
- `.gitignore` protects sensitive environment files.
- environment variable references are documented.
- no high-confidence secret pattern is found in tracked executable/configuration files.
- final audit report contains PASS.
