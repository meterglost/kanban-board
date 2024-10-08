db.createCollection("stages");

db.collection.createIndex( { name: 1 }, { unique: true } );

db.stages.insertMany([
	{
		name: "Backlog",
		desc: "Tasks that are not yet started.",
		color: "#6b7280", // gray-500
		limit: 5,
	},
	{
		name: "To do",
		desc: "Tasks that are ready to be worked on.",
		color: "#eab308", // yellow-500
		limit: 5,
	},
	{
		name: "Pending",
		desc: "Tasks that are waiting for something.",
		color: "#ef4444", // red-500
		limit: 5,
	},
	{
		name: "In progress",
		desc: "Tasks that are actively being worked on.",
		color: "#0ea5e9", // sky-500
		limit: 5,
	},
	{
		name: "Review",
		desc: "Tasks that are in review.",
		color: "#a855f7", // purple-500
		limit: 5,
	},
	{
		name: "Done",
		desc: "Tasks that are completed.",
		color: "#22c55e", // green-500
		limit: 5,
	},
]);

db.createCollection("tasks");

db.collection.createIndex( { stage: 1 }, { unique: true } );

db.tasks.insertMany([
	{
		name: "Task 1",
		desc: "This is task 1",
		stage: "Backlog",
		labels: [],
		scope: undefined,
		priority: undefined,
	},
	{
		name: "Task 2",
		desc: "This is task 2",
		stage: "To do",
		labels: [],
		scope: undefined,
		priority: undefined,
	},
	{
		name: "Task 3",
		desc: "This is task 3",
		stage: "Pending",
		labels: [],
		scope: undefined,
		priority: undefined,
	},
	{
		name: "Task 4",
		desc: "This is task 4",
		stage: "In progress",
		labels: [],
		scope: undefined,
		priority: undefined,
	},
	{
		name: "Task 5",
		desc: "This is task 5",
		stage: "Review",
		labels: [],
		scope: undefined,
		priority: undefined,
	},
	{
		name: "Task 6",
		desc: "This is task 6",
		stage: "Done",
		labels: [],
		scope: undefined,
		priority: undefined,
	},
]);

db.createCollection("labels");

db.collection.createIndex( { name: 1 }, { unique: true } );

db.labels.insertMany([
	{
		prefix: "Priority: ",
		name: "Low",
		color: "#eab308", // yellow-500
	},
	{
		prefix: "Priority: ",
		name: "Medium",
		color: "#f97316", // orange-500
	},
	{
		prefix: "Priority: ",
		name: "High",
		color: "#ef4444", // red-500
	},
]);
