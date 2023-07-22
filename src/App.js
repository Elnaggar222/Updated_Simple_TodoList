import Header from "./components/TodoList/Header";
import TodoList from "./views/TodoList";
import "./assets/css/index.css"
function App() {

  return (
    <div className="App">
      <Header/>
      <TodoList/>
    </div>
  );
}

export default App;
