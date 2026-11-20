
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Destinations from "./components/Destinations/Destinations.jsx";
import Reservation from "./Components/Reservations/reservation.jsx";
import "./App.css";
import Login from "./components/Login/Login.jsx";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Destinations />
        <Reservation />
        <Login/>
        
      </main>

      <Footer />
    </div>
  );
}

export default App;
