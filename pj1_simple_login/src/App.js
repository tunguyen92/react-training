import ComponentA from "./components/componentA/ComponentA";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/**
         * ComponentA and Home only a example to show how to use Component in React
         * Every single function in pages/ or components can call a component
         * you can remove, rename or do whatever u want with them.
         */}
        <ComponentA propA = "1" propB = "2"/>
        <Home />
      </header>
    </div>
  );
}

export default App;
