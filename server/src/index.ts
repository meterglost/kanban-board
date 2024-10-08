import fastify from "fastify";

const server = fastify({
	logger: true,
});

import { databasePlugin, envPlugin } from "./helpers";

import { stageRoute, taskRoute } from "./components";

server.register(async (app) => {
	await app.register(envPlugin);
	await app.register(databasePlugin);

	app.register(stageRoute, { prefix: "/stages" });
	app.register(taskRoute, { prefix: "/tasks" });
});

server.get("/", async (req, res) => {
	res.send({ hello: "world" });
});

server.listen({ host: "0.0.0.0", port: 8080 }, (err, address) => {
	if (err) throw err;
	console.log(`Server listening at ${address}`);
});
