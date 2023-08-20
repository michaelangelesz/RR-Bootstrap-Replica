import "./App.css"
import TopBar from "./Components/TopBar"
import StoreListing from "./Components/StoreListing"
import Background from "./Components/Background"

function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <StoreListing />
    </div>
  )
}

export default App
