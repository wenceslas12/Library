import "./css/main.css";
import DisplayBooks from "./components/DisplayBooks";
import AddBook from "./components/AddBook";


function App() {
  return (
    <div className="App">
      <h1>
        My library
      </h1>
        <AddBook />
        <DisplayBooks />
    </div>
  );
}

export default App;
