const { Plugin } = require("obsidian");

class DiacriticFixerPlugin extends Plugin {
    async onload() {
        console.log("Diacritic Fixer Plugin loaded");

        // Register the paste event listener
        this.registerEvent(
            this.app.workspace.on("editor-paste", this.handlePaste.bind(this))
        );
    }

    onunload() {
        console.log("Diacritic Fixer Plugin unloaded");
    }

    handlePaste(evt, editor) {
        // Get text from the clipboard event
        const text = evt.clipboardData.getData("text");
        console.log("Original pasted text", text);

        // Correct separated diacritic characters
        const correctedText = this.recombineDiacritics(text);
        console.log("Corrected pasted text:", correctedText);

        // Replace the editor's selection with the corrected text
        editor.replaceSelection(correctedText);

        // Prevent default paste behavior to avoid double pasting
        if (text != "")
            evt.preventDefault();
    }

    recombineDiacritics(text) {
        // Define mappings for separated diacritics
        const diacriticMap = {
            "ˇc": "č", "ˇC": "Č",
            "ˇe": "ě", "ˇE": "Ě",
            "ˇs": "š", "ˇS": "Š",
            "ˇr": "ř", "ˇR": "Ř",
            "ˇz": "ž", "ˇZ": "Ž",
            "´a": "á", "´A": "Á",
            "´e": "é", "´E": "É",
            "´i": "í", "´I": "Í",
            "´o": "ó", "´O": "Ó",
            "´u": "ú", "´U": "Ú",
            "˚u": "ů", "˚U": "Ů",
            "´y": "ý", "´Y": "Ý",
            "´n": "ń", "´N": "Ń",
            "´ı": "í", "I´": "Í",
            "ı´": "í"
        };

        // Replace each separated diacritic with its combined form
        for (const [pattern, combined] of Object.entries(diacriticMap)) {
            const regex = new RegExp(pattern, "g");
            text = text.replace(regex, combined);
        }

        return text;
    }
}

module.exports = DiacriticFixerPlugin;
