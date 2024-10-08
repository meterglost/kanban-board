import type { LabelProps, PriorityLabelProps, ScopeLabelProps } from "./Label";
import Label from "./Label";

export type TaskProps = {
	id: string;
	name: string;
	desc: string;
	stage: string;
	labels: LabelProps[];

	scope?: ScopeLabelProps;
	priority?: PriorityLabelProps;
};

const Task = ({ name, desc, labels = [], scope, priority }: TaskProps) => {
	return (
		<div className="w-full h-max rounded-lg bg-slate-300">
			<img
				className="w-full max-h-40 bg rounded-t-lg object-cover"
				src="/image/placeholder.png"
				alt=""
			/>
			<div className="px-4 py-2">
				<div>
					<h4>{name}</h4>
				</div>
				<div>
					<p className="text-sm">{desc}</p>
				</div>
				<div className="flex flex-row flex-wrap gap-2 py-2">
					{labels.map((label) => (
						<Label key={label.id} {...label} />
					))}

					{scope && <Label {...scope} />}
					{priority && <Label {...priority} />}
				</div>
			</div>
		</div>
	);
};

export default Task;
