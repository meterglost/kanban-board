import FastifyPlugin from "fastify-plugin";

import mongoPlugin from "@fastify/mongodb";

const databasePlugin = FastifyPlugin(async (instance) => {
	await instance.register(mongoPlugin, {
		url: `mongodb://${instance.config.MONGO_INITDB_ROOT_USERNAME}:${instance.config.MONGO_INITDB_ROOT_PASSWORD}@mongo`,
		database: "app",
		forceClose: true,
	});

	if (!instance.mongo.db) throw new Error("MongoDB connection not available");
});

export default databasePlugin;
