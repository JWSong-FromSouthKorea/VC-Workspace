import {post, listen, log} from fastify({logger:true});
import returnForm from "../service/betterPrompt";

// TODO: add exception handling
post("/betterPrompt", async (req, res) => {
    const {prompt} = req.body;
    return res.code(200).send(new returnForm(prompt).getForm());
});

const run = async () => {
    try {
        await listen(8085);
        log.info("server start on port 8085");
    } catch (error) {
        log.error(error);
        process.exit();
    }
}

run();