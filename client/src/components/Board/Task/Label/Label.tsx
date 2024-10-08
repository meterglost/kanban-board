export type LabelProps = {
	id: string;
	name: string;
	color: string;
	prefix: string;
};

export type ScopeLabelProps = LabelProps & {
	prefix: "Scope: ";
};

export type PriorityLabelProps = LabelProps & {
	prefix: "Priority: ";
};

const Label = ({ name, color, prefix }: LabelProps) => {
	return (
		<span
			className="rounded-full px-2 py-1 text-xs"
			style={{ backgroundColor: color }}
		>
			{`${prefix}${name}`}
		</span>
	);
};

export default Label;
