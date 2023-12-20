import "../utils/openAI";

class reqGPT {
    #betterPrompt;
    #_setBetterPrompt = (prompt) => {
        this.#betterPrompt = prompt;
    }

    constructor(prompt) {
        const improved = analyzeTextWithGPT3(prompt);
        this.#_setBetterPrompt(improved === "FAIL" ? prompt : improved);
    }

    getAnalyzedPrompt = () => {
        return this.#betterPrompt;
    }
}

export default reqGPT;