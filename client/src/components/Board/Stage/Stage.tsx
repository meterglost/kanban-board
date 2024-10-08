import Task, { type TaskProps } from "@/components/Board/Task";

export type StageProps = {
	name: string;
	desc: string;
	color: string;
	limit: number;
	tasks: TaskProps[];
};

const Stage = ({ name, desc, color, limit = 0, tasks = [] }: StageProps) => {
	const StageHead = () => {
		return (
			<div className="w-full h-max px-4 pt-2">
				<div className="flex flex-row gap-x-2">
					<div className="flex-none content-center">
						<div
							className="w-4 h-4 rounded-full"
							style={{ backgroundColor: color }}
						/>
					</div>
					<div className="flex-auto content-center overflow-hidden">
						<h3 className="whitespace-nowrap overflow-hidden text-ellipsis">
							{name}
						</h3>
					</div>
					<div className="flex-none content-center">
						<div className="rounded-full bg-slate-300 px-2 py-1 text-center text-xs">
							{`${tasks.length} / ${limit}`}
						</div>
					</div>
				</div>
			</div>
		);
	};

	const StageDesc = () => {
		return (
			<div className="w-full h-max px-4 pb-2">
				<div className="text-sm">{desc}</div>
			</div>
		);
	};

	const StageTask = () => {
		return (
			<div className="w-full h-full px-2 py-2 overflow-y-auto">
				<div className="flex flex-col gap-y-2">
					{tasks.map((task) => (
						<Task key={task.name} {...task} />
					))}
				</div>
			</div>
		);
	};

	return (
		<div className="w-80 h-full rounded-lg bg-slate-200 flex flex-col">
			<div className="flex-none">
				<StageHead />
			</div>
			<div className="flex-none">
				<StageDesc />
			</div>
			<div className="flex-auto overflow-y-hidden">
				<StageTask />
			</div>
		</div>
	);
};

export default Stage;
