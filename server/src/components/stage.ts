import type { FastifyPluginAsync } from "fastify";

const stagePlugin: FastifyPluginAsync = async (instance) => {
	if (!instance.mongo.db) return;

	const stageCollection = instance.mongo.db.collection("stages");

	instance.get("/", async () => {
		return stageCollection.find().toArray();
	});
};

export default stagePlugin;
