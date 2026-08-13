# MELKISM International Application Shell

Version: v0.1.2

## Supported Locales

- fa — Persian — RTL
- en — English — LTR
- ar — Arabic — RTL
- tr — Turkish — LTR

## URL Strategy

Locale-prefixed URLs are used:

/fa
/en
/ar
/tr

## Root

The root `/` redirects to `/fa`.

## Independence

MELKISM is completely independent from MELKIST.

No MELKIST source, database, migration, component or internal dependency
is used by this shell.

## Future Integration

Future MELKIST integration is isolated behind:

lib/integrations/melkist/

Integration remains disabled during Foundation development.
