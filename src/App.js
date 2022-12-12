import "./App.scss";
import Dictionary from "./components/Dictionary";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Dictionary project</h1>
          <h2>What word do you want to look up?</h2>
          <Dictionary />
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
