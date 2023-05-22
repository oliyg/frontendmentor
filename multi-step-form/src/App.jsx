import "./App.css";
import Content from "./Content";
import Nav from "./Nav";
import BottomNav from "./BottomNav";

function App() {
  return (
    <div className="w-full desktop:rounded-[0.63rem] desktop:p-4 desktop:w-[58.75rem] desktop:flex desktop:justify-between desktop:bg-gray-100">
      <Nav />
      <Content step={3} />
      <BottomNav />
    </div>
  );
}

export default App;
