# Diacritic Fixer Plugin for Obsidian

The **Diacritic Fixer Plugin** automatically combines separated diacritics (e.g., `znaˇc´ıme` → `značíme`) when pasting text into Obsidian, especially useful for Czech text copied from LaTeX.

## Features
- Combines common diacritics like `ˇ`, `´`, and `˚` with their base letters.
- Supports Czech characters such as `č`, `ě`, `ř`, and `ů`.
- Automatic text correction upon paste.

## Installation

1. **Manual**: Download the `main.js`, `manifest.json`, and `styles.css` files to `.obsidian/plugins/diacritic-fixer` in your vault.
2. **Enable**: Go to **Settings > Community plugins** in Obsidian, find **Diacritic Fixer Plugin**, and toggle it on.

## Usage
Simply paste text with separated diacritics, and the plugin will automatically correct them in the editor.

### Examples
- `znaˇc´ıme` → `značíme`
- `zobrazen´ı` → `zobrazení`

## Troubleshooting
1. **Ensure Plugin is Enabled**: Check **Settings > Community plugins**.
2. **Console Errors**: Open the developer console (`Ctrl+Shift+I` or `Cmd+Option+I` on Mac) for error messages.
3. **Update Plugin**: Download the latest version if issues persist.

Contributions for additional language support are welcome!

