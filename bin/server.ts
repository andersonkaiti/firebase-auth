import http, { Server } from "node:http";
import { app } from "@src/app.ts";

const server: Server = http.createServer(app);

const PORT = Number(process.env.PORT);

app.set("port", PORT);

server.listen(PORT, () => {
  console.log(`🚀 Server is running in ${PORT}.`);
});
