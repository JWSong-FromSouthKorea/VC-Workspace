import reqGPT from "./reqGpt";

class returnForm {
    #improvedPrompt;
    #_promptImprover = (prompt) => {
        const improved = new reqGPT(prompt).getAnalyzedPrompt();
        return improved;
    };

    constructor(prompt) {
        this.#improvedPrompt = this.#_promptImprover(prompt);
    }

    getForm = () => {
        return this.#improvedPrompt;
    }
}

export default returnForm;