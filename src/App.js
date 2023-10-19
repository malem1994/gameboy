import "./App.css";
import { PageHero } from "./components/pages/PageHero.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <PageHero />
      </header>
    </div>
  );
}

export default App;
