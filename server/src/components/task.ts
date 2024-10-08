import type { FastifyPluginAsync } from "fastify";

const taskPlugin: FastifyPluginAsync = async (instance) => {
	if (!instance.mongo.db) return;

	const taskCollection = instance.mongo.db.collection("tasks");

	instance.get("/", async () => {
		return taskCollection.find().toArray();
	});
};

export default taskPlugin;
