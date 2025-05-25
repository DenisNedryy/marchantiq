import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/layouts/Header.jsx";
import { Footer } from "./components/layouts/Footer.jsx";
import { Accueil } from "./pages/Accueil.jsx";

function App() {

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
