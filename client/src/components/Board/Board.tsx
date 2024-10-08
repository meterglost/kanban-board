import Stage from "./Stage";

import { useEffect, useState } from "react";

import type { StageProps } from "./Stage";
import type { TaskProps } from "./Task";

const Board = () => {
	const [stages, setStages] = useState<StageProps[]>([]);

	useEffect(() => {
		const fetchStages = async () => {
			const stageResp = await fetch("/api/stages");
			const stageList: StageProps[] = await stageResp.json();

			const taskResp = await fetch("/api/tasks");
			const taskList: TaskProps[] = await taskResp.json();

			for (const stage of stageList) {
				stage.tasks = taskList.filter(
					(task) => task.stage === stage.name,
				);
			}

			setStages(stageList);
		};

		fetchStages();
	}, []);

	const renderStages = () => {
		return stages.map((stage) => <Stage key={stage.name} {...stage} />);
	};

	return (
		<div className="w-full h-full overflow-x-scroll px-4 py-2">
			<div className="w-max h-full flex flex-row flex-nowrap gap-x-4">
				{renderStages()}
			</div>
		</div>
	);
};

export default Board;
