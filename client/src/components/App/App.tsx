import Board from "@/components/Board";
import Header from "@/components/Header";
import Toolbar from "@/components/Toolbar";

const App = () => {
	return (
		<div className="w-screen h-screen overflow-hidden">
			<div className="w-full h-full flex flex-col">
				<div className="flex-none">
					<Header />
				</div>
				<div className="flex-none">
					<Toolbar />
				</div>
				<div className="flex-auto overflow-y-hidden">
					<Board />
				</div>
			</div>
		</div>
	);
};

export default App;
