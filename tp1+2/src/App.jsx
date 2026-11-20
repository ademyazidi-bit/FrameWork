import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Destinations from "./components/Destinations/Destinations";
import Example from "./components/Example/Example";
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Destinations />
        <Example />
      </main>
      <Footer />
    </div>
  )
}

export default App
