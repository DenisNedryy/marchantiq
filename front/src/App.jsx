import { Routes, Route } from 'react-router-dom';
import { Header } from "./components/layouts/Header.jsx";
import { Footer } from "./components/layouts/Footer.jsx";
import { Accueil } from "./pages/Accueil.jsx";
import { Presentation } from "./pages/Presentation.jsx";
import { NewsCorner } from './pages/NewsCorner.jsx';
import { Contact } from "./pages/Contact.jsx";
import { Auth } from "./pages/Auth.jsx";

function App() {

  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/newsCorner" element={<NewsCorner />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
