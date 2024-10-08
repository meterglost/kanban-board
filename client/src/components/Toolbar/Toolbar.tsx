const Toolbar = () => {
	return (
		<div className="w-full h-max px-4 py-2">
			<div className="flex flex-row gap-x-2">
				<input
					type="search"
					name="search"
					placeholder="Filter"
					className="flex-auto px-2 py-1 rounded-lg outline-none border focus:border-blue-300"
				/>
				<button
					type="button"
					className="px-2 py-1 rounded-lg bg-slate-200 hover:bg-slate-300"
				>
					Add task
				</button>
				<button
					type="button"
					className="px-2 py-1 rounded-lg bg-slate-200 hover:bg-slate-300"
				>
					Add stage
				</button>
			</div>
		</div>
	);
};

export default Toolbar;
