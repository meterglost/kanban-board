import FastifyPlugin from "fastify-plugin";

import fastifyEnv from "@fastify/env";

declare module "fastify" {
	interface FastifyInstance {
		config: {
			MONGO_INITDB_ROOT_USERNAME: string;
			MONGO_INITDB_ROOT_PASSWORD: string;
		};
	}
}

const envPlugin = FastifyPlugin(async (instance) => {
	return instance.register(fastifyEnv, {
		schema: {
			type: "object",
			required: ["MONGO_INITDB_ROOT_USERNAME", "MONGO_INITDB_ROOT_PASSWORD"],
			properties: {
				MONGO_INITDB_ROOT_USERNAME: {
					type: "string",
					nullable: false,
				},
				MONGO_INITDB_ROOT_PASSWORD: {
					type: "string",
					nullable: false,
				},
			},
		},
	});
});

export default envPlugin;
