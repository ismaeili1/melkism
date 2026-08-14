# MELKISM v0.2.1

## International Brand Header & Navigation

## Purpose

The MELKISM header establishes the primary international
navigation system for the platform.

## Supported Locales

- fa — Persian / RTL
- ar — Arabic / RTL
- en — English / LTR
- tr — Turkish / LTR

## Primary Navigation

News
Articles
Research
Markets
Cities
Countries
Trends
Data
Reports

## Architecture

BrandMark
    ↓
SiteHeader
    ↓
DesktopNavigation
    ↓
navigation.config.ts

The navigation configuration is locale-aware and does not
hard-code a single language into the application shell.

## MELKIST Boundary

MELKIST is not imported by the navigation layer.

MELKISM remains independently deployable.

Any future MELKIST integration must remain isolated inside:

lib/integrations/melkist/
