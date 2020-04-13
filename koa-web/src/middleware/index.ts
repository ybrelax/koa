import path from "path";
import bodyParser from "koa-bodyparser";

import miSend from "./mi-send";


export default (app) => {
    app.use(bodyParser())
    app.use(miSend());
}