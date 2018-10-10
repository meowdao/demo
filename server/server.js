import express from "./configs/express";
import assets from "./routes/assets";
import main from "./routes/main";
import login from "./routes/login";
import fe from "./routes/fe";
import {sendError} from "./utils/wrapper";


const app = express();

app.use(assets);
app.use(main);
app.use(login);
app.use(fe);
app.use(sendError);

const listener = app.listen(process.env.PORT, () => {
  console.info(`Express server listening on port ${listener.address().port}`);
});

process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);

export default app;
